import { FolderIcon } from "@/components/icons/FolderIcon";
import { Button } from "./Button";

type ProyectosButtonProps = {
  label: string;
  href?: string;
  className?: string;
};

export const ProyectosButton = ({
  label,
  href = "#proyectos",
  className,
}: ProyectosButtonProps) => (
  <Button href={href} className={className} icon={<FolderIcon aria-hidden="true" />}>
    {label}
  </Button>
);
