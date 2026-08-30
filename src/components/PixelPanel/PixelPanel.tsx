type PixelPanelProps = {
  children: React.ReactNode;
  className?: string;
};

// Mismo lenguaje que los slots de habilidad de la ficha de personaje: cuatro
// cuadraditos que asoman fuera de la esquina y "sujetan" el panel.
const CORNERS = [
  "-top-1 -left-1",
  "-top-1 -right-1",
  "-bottom-1 -left-1",
  "-bottom-1 -right-1",
];

export const PixelPanel = ({ children, className = "" }: PixelPanelProps) => (
  <div className={`glass relative rounded-xl bg-glass ${className}`}>
    {children}

    {CORNERS.map((position) => (
      <span
        key={position}
        aria-hidden="true"
        className={`absolute size-1.5 bg-[#F5B668] dark:bg-[#E5D1FF] ${position}`}
      />
    ))}
  </div>
);
