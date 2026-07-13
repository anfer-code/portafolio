import Image from "next/image";
import { Button } from "./Button";

type LinkedinButtonProps = {
  href: string;
  className?: string;
};

export const LinkedinButton = ({ href, className = "" }: LinkedinButtonProps) => (
  <Button
    href={href}
    external
    variant="outline"
    iconPosition="end"
    className={`dark:bg-[#171C68] ${className}`}
    icon={<Image src="/linkedn.svg" alt="" width={16} height={16} />}
  >
    Contactar vía LinkedIn
  </Button>
);
