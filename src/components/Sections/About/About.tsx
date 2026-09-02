import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LinkedinButton } from "@/components/Buttons/LinkedinButton";
import { ContactDialog } from "@/components/ContactDialog/ContactDialog";
import { CharacterCard } from "./childs/CharacterCard/CharacterCard";

export const About = async ({ locale }: { locale: Locale }) => {
  const t = await getDictionary(locale);

  return (
    <section id="sobre-mi" className="w-full pt-14 pb-6 sm:pt-25 sm:pb-10 md:min-h-200">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-center justify-between">
          <div>
            <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
              {t.about.saludo}
            </h2>
            <p className="mt-2 text-lg text-secondary-text">{t.about.fonetica}</p>
            <p className="mt-2 text-lg text-secondary-text">
              {t.about.presentacion}
            </p>
            <p className="mt-2 text-lg text-secondary-text">{t.about.gusto}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkedinButton
                label={t.hero.linkedin}
                href="https://www.linkedin.com/in/valeraanfer/"
                bgClass="bg-[#DAAD72] dark:bg-[#171C68]"
                className="w-full justify-center sm:w-auto sm:justify-start"
              />
              <ContactDialog
                locale={locale}
                variant="filled"
                className="w-full justify-center sm:w-auto sm:justify-start"
              />
            </div>
          </div>

          <CharacterCard locale={locale} />
        </div>
      </div>
    </section>
  );
};
