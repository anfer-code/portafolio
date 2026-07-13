import Image, { type ImageProps } from "next/image";

type ThemeImageProps = Omit<ImageProps, "src"> & {
  lightSrc: string;
  darkSrc: string;
};

// Renderiza ambas versiones (clara/oscura) y alterna con la variante `dark:`.
// Es un Server Component: el swap ocurre por CSS, sin JavaScript.
export const ThemeImage = ({
  lightSrc,
  darkSrc,
  className = "",
  ...props
}: ThemeImageProps) => (
  <>
    <Image src={lightSrc} className={`dark:hidden ${className}`} {...props} />
    <Image
      src={darkSrc}
      className={`hidden dark:block ${className}`}
      {...props}
    />
  </>
);
