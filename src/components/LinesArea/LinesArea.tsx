type LinesAreaProps = {
  children: React.ReactNode;
};

/**
 * Fondo de cuadrícula continuo.
 * Mismo patrón que `SkyArea`: el fondo se declara una vez y las secciones que
 * envuelve quedan sobre él, sin cortes entre una y otra.
 */
export const LinesArea = ({ children }: LinesAreaProps) => (
  <div className="w-full bg-[url('/img/light/light-lines.png')] bg-contain bg-center bg-repeat dark:bg-[url('/img/dark/dark-lines.png')]">
    {children}
  </div>
);
