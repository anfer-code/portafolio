type ButtonProps = {
  /** Con `href` sale un enlace; sin el, un `<button>` que dispara `onClick`. */
  href?: string;
  onClick?: () => void;
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
  onClick,
  children,
  icon,
  iconPosition = "start",
  variant = "filled",
  external = false,
  className = "",
  bgClass,
}: ButtonProps) => {
  const { base, bg } = variantStyles[variant];
  const classes = `inline-flex items-center gap-2 font-medium ${base} ${bgClass ?? bg} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "start" && icon}
      {children}
      {icon && iconPosition === "end" && icon}
    </>
  );

  if (!href) {
    return (
      <button type="button" onClick={onClick} className={`${classes} cursor-pointer`}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {content}
    </a>
  );
};
