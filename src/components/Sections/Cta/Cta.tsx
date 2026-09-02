import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LinkedinButton } from "@/components/Buttons/LinkedinButton";
import { ContactDialog } from "@/components/ContactDialog/ContactDialog";

export const Cta = async ({ locale }: { locale: Locale }) => {
  const t = await getDictionary(locale);

  return (
  <section id="contacto" className="px-6 py-16">
    <div className="glass mx-auto max-w-2xl rounded-2xl bg-glass px-8 py-12 text-center">
      <h2 className="font-comic text-3xl text-main-text sm:text-4xl">
        {t.cta.titulo}
      </h2>

      <p className="mx-auto mt-4 max-w-md text-main-text">
        {t.cta.texto}
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <LinkedinButton
          label={t.hero.linkedin}
          href="https://www.linkedin.com/in/valeraanfer/"
          bgClass="bg-[#DAAD72] dark:bg-[#171C68]"
          className="w-full justify-center sm:w-auto"
        />
        <ContactDialog
          locale={locale}
          variant="filled"
          className="w-full justify-center sm:w-auto"
        />
      </div>
    </div>
  </section>
);
};
