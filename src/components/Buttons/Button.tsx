type ButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  variant?: "filled" | "outline";
  external?: boolean;
  className?: string;
};

const variantStyles = {
  filled:
    "rounded-lg bg-accent px-7.5 py-4 text-accent-text transition hover:brightness-90",
  outline: "rounded-lg bg-glass glass px-6 py-3 text-main-text",
};

export const Button = ({
  href,
  children,
  icon,
  iconPosition = "start",
  variant = "filled",
  external = false,
  className = "",
}: ButtonProps) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={`inline-flex items-center gap-2 font-medium ${variantStyles[variant]} ${className}`}
  >
    {icon && iconPosition === "start" && icon}
    {children}
    {icon && iconPosition === "end" && icon}
  </a>
);
