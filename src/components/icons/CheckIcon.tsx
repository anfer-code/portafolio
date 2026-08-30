import { IconContainer } from "./IconContainer";

export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <IconContainer width={16} height={16} viewBox="0 0 16 16" {...props}>
    <circle cx="8" cy="8" r="8" fill="currentColor" />
    <path
      d="M4.5 8.2l2.2 2.2 4.8-4.8"
      stroke="#fff"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconContainer>
);
