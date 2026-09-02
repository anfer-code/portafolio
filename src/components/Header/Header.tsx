import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { MobileNav } from "./childs/MobileNav/MobileNav";
import { MusicToggle } from "./childs/MusicToggle/MusicToggle";
import { LanguageToggle } from "./childs/LanguageToggle/LanguageToggle";
import { ToggleHeader } from "./childs/ToogleHeader/ToogleHeader";

type HeaderProps = {
  locale: Locale;
  /** `true` fuera de la home: los enlaces del menú son anclas y necesitan
   *  volver a la portada del idioma en curso antes del `#`. */
  desdeProyecto?: boolean;
};

export const Header = async ({ locale, desdeProyecto = false }: HeaderProps) => {
  const t = await getDictionary(locale);
  const base = desdeProyecto ? localePath(locale) : "";

  const items = [
    { name: t.nav.proyectos, href: "#proyectos" },
    { name: t.nav.sobreMi, href: "#sobre-mi" },
    { name: t.nav.experiencia, href: "#experiencia" },
    { name: t.nav.contacto, href: "#contacto" },
  ];

  return (
    <header className="fixed inset-x-0 top-19 z-50 px-4">
      <div className="flex items-center justify-center gap-3">
        <ul className="bg-glass glass hidden h-14 min-w-129.5 items-center justify-between rounded-lg px-8 md:flex">
          {items.map((item) => (
            <li key={item.name} className="ml-4">
              <a
                href={`${base}${item.href}`}
                className="font-geist font-bold text-main-text capitalize transition-opacity hover:opacity-60"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <MobileNav items={items} base={base} t={t.nav} />

        {/* Idioma, tema y música comparten un panel, separados por líneas */}
        <div className="bg-glass glass flex h-14 items-center rounded-lg">
          <LanguageToggle locale={locale} label={t.nav.cambiarIdioma} />
          <span className="h-7 w-px bg-main-text/20" aria-hidden="true" />
          <ToggleHeader />
          <span className="h-7 w-px bg-main-text/20" aria-hidden="true" />
          <MusicToggle />
        </div>
      </div>
    </header>
  );
};
