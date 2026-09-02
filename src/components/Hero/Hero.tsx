import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LinkedinButton } from "@/components/Buttons/LinkedinButton";
import { ProyectosButton } from "@/components/Buttons/ProyectosButton";
import { HeroIllustration } from "./childs/HeroIllustration/HeroIllustration";

export const Hero = async ({ locale }: { locale: Locale }) => {
  const t = await getDictionary(locale);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroIllustration alt={t.hero.ilustracion} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44">
        <div className="max-w-xl">
          <h1 className="font-comic text-4xl text-main-text sm:text-7xl">
            Anfernee Valera
          </h1>
          <p className="mt-3 text-lg text-secondary-text sm:text-4xl font-medium">
            {t.hero.rol}
          </p>
          <p className="mt-6 text-secondary-text sm:text-2xl">
            {t.hero.descripcion}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ProyectosButton
              label={t.hero.verProyectos}
              href={locale === "es" ? "#proyectos" : "/en#proyectos"}
              className="w-full justify-center sm:w-auto sm:justify-start" />
            <LinkedinButton
              label={t.hero.linkedin}
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
