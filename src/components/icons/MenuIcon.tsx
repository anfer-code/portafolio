import { IconContainer } from "./IconContainer";

export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <IconContainer width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </IconContainer>
);
