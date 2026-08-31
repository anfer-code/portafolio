/**
 * Campos, límites y validación del formulario de contacto.
 *
 * Va aparte de `contact.ts` por dos razones. Un módulo `"use server"` solo
 * puede exportar funciones async, así que las constantes y los tipos no caben
 * ahí. Y separada, la validación es una función pura: se prueba sin levantar
 * Next ni tocar la red.
 */

export type ContactField = "name" | "email" | "message";

export type ContactValues = Record<ContactField, string>;

export type ContactState = {
  status: "idle" | "sent" | "error";
  /** Mensaje general, el que se lee arriba del botón de enviar. */
  message: string;
  errors: Partial<Record<ContactField, string>>;
  /** Lo ya escrito, para no vaciar el formulario cuando algo falla. */
  values: ContactValues;
};

export const CONTACT_LIMITS = { name: 80, email: 160, message: 2000 };

export const EMPTY_VALUES: ContactValues = { name: "", email: "", message: "" };

export const CONTACT_INITIAL_STATE: ContactState = {
  status: "idle",
  message: "",
  errors: {},
  values: EMPTY_VALUES,
};

/** Nombre del honeypot: un campo que solo completan los bots. */
export const HONEYPOT_FIELD = "empresa";

// Validación deliberadamente laxa: el objetivo es atajar el dedazo, no decidir
// qué direcciones existen. La única prueba real de un correo es escribirle.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const readContactForm = (formData: FormData): ContactValues => ({
  name: String(formData.get("name") ?? "").trim(),
  email: String(formData.get("email") ?? "").trim(),
  message: String(formData.get("message") ?? "").trim(),
});

export const validateContact = (values: ContactValues) => {
  const errors: ContactState["errors"] = {};

  if (!values.name) errors.name = "Escribe tu nombre.";
  else if (values.name.length > CONTACT_LIMITS.name)
    errors.name = "Ese nombre es demasiado largo.";

  if (!values.email) errors.email = "Necesito un correo para responderte.";
  else if (
    values.email.length > CONTACT_LIMITS.email ||
    !EMAIL_RE.test(values.email)
  )
    errors.email = "Revisa el correo, parece que le falta algo.";

  if (!values.message) errors.message = "Cuéntame algo, aunque sea corto.";
  else if (values.message.length > CONTACT_LIMITS.message)
    errors.message = `El mensaje pasa de ${CONTACT_LIMITS.message} caracteres.`;

  return errors;
};
