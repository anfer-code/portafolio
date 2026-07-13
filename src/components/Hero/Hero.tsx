import { LinkedinButton } from "@/components/Buttons/LinkedinButton";
import { ProyectosButton } from "@/components/Buttons/ProyectosButton";
import { HeroIllustration } from "./childs/HeroIllustration/HeroIllustration";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroIllustration />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44">
        <div className="max-w-xl">
          <h1 className="font-comic text-4xl text-main-text sm:text-7xl">
            Anfernee Valera
          </h1>
          <p className="mt-3 text-lg text-secondary-text sm:text-4xl font-medium">
            Frontend Engineer
          </p>
          <p className="mt-6 text-secondary-text sm:text-2xl">
            Creo experiencias digitales accesibles y optimizadas, con un diseño
            impecable y amigable.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ProyectosButton className="w-full justify-center sm:w-auto sm:justify-start" />
            <LinkedinButton
              href="https://www.linkedin.com/in/valeraanfer/"
              className="w-full justify-center sm:w-auto sm:justify-start"
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute top-44 right-6 z-10 max-w-56 rounded-2xl bg-surface px-4 py-3 text-sm text-main-text shadow-lg">
        <p>¡Bienvenido/a a mi setup! Haz scroll para navegar.</p>
      </div> */}
    </section>
  );
};
