import { MailIcon } from "@/components/icons/MailIcon";
import { Button } from "./Button";

type MailButtonProps = {
  href: string;
  className?: string;
  variant?: "filled" | "outline";
};

export const MailButton = ({
  href,
  className = "",
  variant = "outline",
}: MailButtonProps) => (
  <Button
    href={href}
    variant={variant}
    iconPosition="start"
    className={className}
    // Ícono inline con `currentColor`: hereda el color del texto del botón,
    // así se ve tanto sobre fondo claro como oscuro.
    icon={<MailIcon className="size-4" aria-hidden="true" />}
  >
    Escribir un correo
  </Button>
);
