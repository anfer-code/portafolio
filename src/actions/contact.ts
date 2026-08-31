"use server";

import {
  EMPTY_VALUES,
  HONEYPOT_FIELD,
  readContactForm,
  validateContact,
  type ContactState,
} from "@/actions/contact-fields";
import { Resend } from "resend";

/**
 * Envío del formulario de contacto.
 *
 * El archivo entero es `"use server"`: nunca viaja al navegador. Por eso las
 * direcciones de acá abajo no quedan expuestas en el HTML, que era medio del
 * problema de los `mailto:` que había antes.
 *
 * Los tipos, los límites y la validación viven en `contact-fields.ts`: un
 * módulo `"use server"` solo puede exportar funciones async.
 */

/** Remitente. Tiene que ser del dominio verificado en Resend. */
const FROM = "Portafolio <contacto@anfervalera.com>";
/** Bandeja donde caen los mensajes. */
const TO = "anfervalera11@gmail.com";

const FAILURE = `No pude enviar el mensaje. Escríbeme directo a ${TO}.`;

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = readContactForm(formData);

  // Si el honeypot viene lleno es un bot. Se le contesta "enviado" a propósito:
  // si le devuelves un error, reintenta con otra estrategia hasta dar con la
  // que pasa. Creyendo que funcionó, se va.
  if (String(formData.get(HONEYPOT_FIELD) ?? "")) {
    return { status: "sent", message: "", errors: {}, values: EMPTY_VALUES };
  }

  const errors = validateContact(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Falta la variable de entorno: es un problema de configuración, no del
    // visitante, así que se registra completo y afuera se dice lo justo.
    console.error("[contacto] falta RESEND_API_KEY en el entorno");
    return { status: "error", message: FAILURE, errors: {}, values };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: TO,
      // La clave de todo: al responder el correo, la respuesta le llega al
      // visitante y no a uno mismo.
      replyTo: values.email,
      subject: `Portafolio — mensaje de ${values.name}`,
      text: `${values.message}\n\n—\n${values.name} <${values.email}>`,
    });

    if (error) throw new Error(`${error.name}: ${error.message}`);

    return { status: "sent", message: "", errors: {}, values: EMPTY_VALUES };
  } catch (cause) {
    console.error("[contacto] Resend rechazó el envío:", cause);
    return { status: "error", message: FAILURE, errors: {}, values };
  }
}
