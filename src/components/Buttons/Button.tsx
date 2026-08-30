type ButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  variant?: "filled" | "outline";
  external?: boolean;
  className?: string;
  /** Reemplaza el fondo del variant. Evita que dos clases `bg-*` compitan. */
  bgClass?: string;
};

// El fondo va aparte del resto: así solo se emite UNA clase `bg-*` y no hay
// conflicto de precedencia cuando el call site quiere otro color.
const variantStyles = {
  filled: {
    base: "rounded-lg px-7.5 py-4 text-accent-text transition hover:brightness-90",
    bg: "bg-accent",
  },
  outline: {
    base: "rounded-lg glass px-6 py-3 text-main-text",
    bg: "bg-glass",
  },
};

export const Button = ({
  href,
  children,
  icon,
  iconPosition = "start",
  variant = "filled",
  external = false,
  className = "",
  bgClass,
}: ButtonProps) => {
  const { base, bg } = variantStyles[variant];

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 font-medium ${base} ${bgClass ?? bg} ${className}`}
    >
      {icon && iconPosition === "start" && icon}
      {children}
      {icon && iconPosition === "end" && icon}
    </a>
  );
};
