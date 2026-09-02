"use client";

import {
  CONTACT_INITIAL_STATE,
  HONEYPOT_FIELD,
  type ContactField,
} from "@/actions/contact-fields";
import { sendContactMessage } from "@/actions/contact";
import { MailButton } from "@/components/Buttons/MailButton";
import type { Locale } from "@/i18n/config";
import { getDictionarySync, type Dictionary } from "@/i18n/dictionaries";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { loadTurnstile, TURNSTILE_SITE_KEY } from "./turnstile";
import { useActionState, useEffect, useRef, useState } from "react";

const fieldStyles =
  "w-full rounded-lg border border-border bg-glass px-4 py-3 text-main-text outline-none placeholder:text-secondary-text focus-visible:border-[#F5B668] dark:focus-visible:border-accent";

type FieldProps = {
  name: ContactField;
  label: string;
  placeholder: string;
  error?: string;
  defaultValue: string;
  multiline?: boolean;
};

const Field = ({
  name,
  label,
  placeholder,
  error,
  defaultValue,
  multiline,
}: FieldProps) => {
  const props = {
    id: name,
    name,
    placeholder,
    defaultValue,
    required: true,
    // El error ya se pinta debajo; esto lo conecta para quien usa lector de
    // pantalla, que si no solo escucha "campo inválido" sin el motivo.
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
    className: fieldStyles,
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-main-text">
        {label}
      </label>

      {multiline ? (
        <textarea {...props} rows={4} className={`${fieldStyles} resize-y`} />
      ) : (
        <input {...props} type={name === "email" ? "email" : "text"} />
      )}

      {error && (
        <p id={`${name}-error`} className="text-sm text-[#B3261E] dark:text-[#FFB4AB]">
          {error}
        </p>
      )}
    </div>
  );
};

const ContactForm = ({ onSent, t }: { onSent: () => void; t: Dictionary["contacto"] }) => {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    CONTACT_INITIAL_STATE,
  );
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  // Monta el widget de Turnstile. Sin clave de sitio no se pinta nada y el
  // formulario sigue funcionando: en local, sin claves, se puede probar igual.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let cancelado = false;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelado || !widgetRef.current) return;
        widgetId.current = turnstile.render(widgetRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "auto",
          size: "flexible",
          language: "es",
        });
      })
      .catch((cause) => console.error("[contacto]", cause));

    return () => {
      cancelado = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  // Cada token sirve una sola vez y dura cinco minutos. Si el envío no salió,
  // hay que pedir uno nuevo o el segundo intento se rechaza por duplicado.
  useEffect(() => {
    if (state.status === "error" && widgetId.current) {
      window.turnstile?.reset(widgetId.current);
    }
  }, [state]);

  if (state.status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <CheckIcon
          className="size-10 text-[#FFDE46] dark:text-[#9B51E0]"
          aria-hidden="true"
        />
        <p className="text-lg font-bold text-main-text">{t.enviado}</p>
        <p className="text-secondary-text">
          {t.enviadoTexto}
        </p>
        <button
          type="button"
          onClick={onSent}
          className="mt-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-text transition hover:brightness-90"
        >
          {t.cerrar}
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="mt-6 flex flex-col gap-4">
      {/* Honeypot: invisible y fuera del recorrido de tabulación, para que no
          lo encuentre ni el teclado ni un lector de pantalla. Solo lo llenan
          los bots que completan todos los inputs del DOM. */}
      <input
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Field
        name="name"
        label={t.nombre}
        placeholder={t.nombrePlaceholder}
        error={state.errors.name}
        defaultValue={state.values.name}
      />
      <Field
        name="email"
        label={t.correo}
        placeholder={t.correoPlaceholder}
        error={state.errors.email}
        defaultValue={state.values.email}
      />
      <Field
        name="message"
        label={t.mensaje}
        placeholder={t.mensajePlaceholder}
        error={state.errors.message}
        defaultValue={state.values.message}
        multiline
      />

      {/* El widget se pinta acá. `overflow-x-auto` porque tiene un ancho mínimo
          propio y en pantallas muy angostas conviene que ruede antes de
          desbordar el modal. */}
      <div ref={widgetRef} className="min-w-0 overflow-x-auto" />

      {state.message && (
        <p
          aria-live="polite"
          className="text-sm text-[#B3261E] dark:text-[#FFB4AB]"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-lg bg-accent px-7.5 py-4 font-medium text-accent-text transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? t.enviando : t.enviar}
      </button>
    </form>
  );
};

type ContactDialogProps = {
  locale: Locale;
  className?: string;
  variant?: "filled" | "outline";
};

/**
 * Botón de contacto y el formulario que abre.
 *
 * Usa el mismo `<dialog>` nativo que las notas del tablero: trae backdrop,
 * cierre con Escape y foco atrapado sin librerías.
 */
export const ContactDialog = ({ locale, className, variant }: ContactDialogProps) => {
  const t = getDictionarySync(locale);
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Cada apertura remonta el formulario. Sin esto, quien envía un mensaje y
  // vuelve a abrir se encuentra con la pantalla de "enviado" en vez del form:
  // `useActionState` no tiene forma de resetearse.
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  const open = () => {
    setOpenCount((n) => n + 1);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <MailButton
        label={t.cta.escribir}
        onClick={open}
        variant={variant}
        className={className}
      />

      <dialog
        ref={dialogRef}
        aria-labelledby="contacto-titulo"
        // `p-0`: el navegador le pone `padding: 1em` a todo <dialog> y Tailwind
        // no lo resetea. Sumado al ancho, sacaba el modal fuera de pantalla.
        className="m-auto w-[min(94vw,32rem)] bg-transparent p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="glass rounded-2xl bg-[var(--main-bg)] px-5 py-8 text-left sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="contacto-titulo"
                className="font-comic text-3xl text-main-text"
              >
                {t.contacto.titulo}
              </h2>
              <p className="mt-1 text-sm text-secondary-text">
                {t.contacto.subtitulo}
              </p>
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={t.contacto.cerrar}
              className="-mt-1 -mr-1 shrink-0 cursor-pointer rounded-lg px-3 py-1 text-2xl leading-none text-secondary-text transition hover:text-main-text"
            >
              ×
            </button>
          </div>

          <ContactForm
            key={openCount}
            t={t.contacto}
            onSent={() => dialogRef.current?.close()}
          />
        </div>
      </dialog>
    </>
  );
};
