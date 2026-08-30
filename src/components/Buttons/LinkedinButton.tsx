import Image from "next/image";
import { Button } from "./Button";

type LinkedinButtonProps = {
  href: string;
  className?: string;
  bgClass?: string;
};

export const LinkedinButton = ({
  href,
  className = "",
  bgClass = "bg-glass dark:bg-[#171C68]",
}: LinkedinButtonProps) => (
  <Button
    href={href}
    external
    variant="outline"
    iconPosition="start"
    bgClass={bgClass}
    className={className}
    icon={<Image src="/linkedn.svg" alt="" width={16} height={16} />}
  >
    Contactar vía LinkedIn
  </Button>
);
