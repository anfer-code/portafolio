import { stats } from "@/data/stats";
import Image from "next/image";
import { Ability } from "../Ability/Ability";

export const CharacterCard = () => (
  <div className="relative mx-auto flex min-h-[520px] w-full max-w-131.75 flex-col bg-[url('/img/dark/marco.png')] bg-[length:100%_100%] bg-center bg-no-repeat sm:aspect-527/618 sm:min-h-0 sm:bg-contain dark:bg-[url('/img/light/marco.png')]">
    {/* Zona superior (crema): avatar + nombre */}
    <div className="flex h-[40%] flex-col items-center justify-center gap-3 pt-8 sm:pt-4">
      <div className="relative size-28 bg-[url('/img/light/profile-bg.png')] bg-contain bg-center bg-no-repeat dark:bg-[url('/img/dark/profile-bg.png')]">
        {/* Capa enmascarada con la forma del círculo: recorta al personaje.
            El personaje va dentro y flota (animate-bob). */}
        <div className="profile-mask dark:profile-mask-dark absolute w-28 h-28 inset-0 flex items-end justify-center">
          <Image
            src="/img/character.png"
            alt="Avatar pixel-art de Anfernee"
            width={113}
            height={114}
            className="animate-bob -mb-2 w-full object-contain"
          />
        </div>
      </div>
      <span className="font-comic-bold text-2xl md:text-[48px] tracking-[2.9px] text-[#3A2410] dark:text-main-text">
        Anfer
      </span>
    </div>

    {/* Zona inferior (café): habilidades como description list */}
    <dl className="flex flex-1 flex-col justify-center gap-5 px-6 py-8 sm:gap-6 sm:py-10 sm:pr-5 sm:pl-15">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
          <Ability
            icon={stat.icon}
            animation={stat.animation}
            delay={`${i * 0.4}s`}
          />
          <div>
            <dt className="font-press-start text-sm tracking-wider text-[#F3D8A0] uppercase dark:text-[#C9BCEF]">
              {stat.label}:
            </dt>
            <dd className="text-[#FCF6EC] dark:text-main-text">{stat.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  </div>
);
