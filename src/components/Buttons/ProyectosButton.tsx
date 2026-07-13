import { FolderIcon } from "@/components/icons/FolderIcon";
import { Button } from "./Button";

type ProyectosButtonProps = {
  className?: string;
};

export const ProyectosButton = ({ className }: ProyectosButtonProps) => (
  <Button
    href="#proyectos"
    className={className}
    icon={<FolderIcon aria-hidden="true" />}
  >
    Ver proyectos
  </Button>
);
