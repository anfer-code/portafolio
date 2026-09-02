import type { Dictionary } from "@/i18n/dictionaries";
import { Ability, PageType } from "@/components/Sections/About/childs/Ability/Ability";
import { ThemeImage } from "@/components/ThemeImage/ThemeImage";
import type { Project } from "@/data/types";
import type { StatAnimation } from "@/data/types";

type ProjectCardProps = { t: Dictionary["proyecto"]["ficha"] } & Pick<Project, "kind" | "role" | "period" | "team">;

// Los PNG de `icons/` van recortados al dibujo, así que el tamaño solo depende
// de su proporción. La llave es la más achatada (75x60) y se queda corta de
// alto frente a las demás: es la única que necesita un empujón.
const ROWS: {
  key: "kind" | "role" | "period" | "team";
  labelKey: keyof Dictionary["proyecto"]["ficha"];
  icon: string;
  animation: StatAnimation;
  iconSize?: string;
}[] = [
  { key: "kind", labelKey: "tipo", icon: "/img/icons/monitor.png", animation: "flip" },
  { key: "role", labelKey: "rol", icon: "/img/icons/badge.png", animation: "flip" },
  { key: "period", labelKey: "periodo", icon: "/img/icons/reloj.png", animation: "turn" },
  {
    key: "team",
    labelKey: "equipo",
    icon: "/img/icons/key.png",
    animation: "turn",
    iconSize: "size-7",
  },
];

export const ProjectCard = ({ t, ...props }: ProjectCardProps) => (
  <div className="mx-auto w-full max-w-105 bg-[url('/img/light/project-frame.png')] bg-[length:100%_100%] bg-center bg-no-repeat px-[9%] pt-[8%] pb-[15%] dark:bg-[url('/img/dark/project-frame.png')]">
    <div className="flex justify-center">
      <ThemeImage
        lightSrc="/img/light/project-badge.png"
        darkSrc="/img/dark/project-badge.png"
        width={222}
        height={222}
        alt=""
        className="pixelated size-24"
      />
    </div>

    <dl className="mt-7 flex flex-col gap-5">
      {ROWS.map(({ key, labelKey, icon, animation, iconSize }, i) => (
        <div key={key} className="flex items-start gap-4">
          <Ability
            icon={icon}
            type={PageType.PROJECT}
            animation={animation}
            iconSize={iconSize}
            delay={`${i * 0.4}s`}
          />

          <div>
            <dt className="font-press-start text-[11px] tracking-wider text-[#853605] uppercase dark:text-[#E5D1FF]">
              {t[labelKey]}
            </dt>
            <dd className="mt-1.5 text-sm text-[#3A2410] dark:text-[#f5f3ff]">
              {props[key]}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  </div>
);
