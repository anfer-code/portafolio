type PixelPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export const PixelPanel = ({ children, className = "" }: PixelPanelProps) => (
  <div className={`glass relative rounded-xl bg-glass ${className}`}>
    {children}
  </div>
);
