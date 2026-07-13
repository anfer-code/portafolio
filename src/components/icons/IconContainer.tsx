type IconProps = React.SVGProps<SVGSVGElement> & {
  width: number | string;
  height: number | string;
  viewBox: string;
};

export const IconContainer = ({ children, ...props }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {children}
  </svg>
);
