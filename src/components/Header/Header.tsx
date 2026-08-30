import { menuItems } from "@/data/nav";
import { MobileNav } from "./childs/MobileNav/MobileNav";
import { MusicToggle } from "./childs/MusicToggle/MusicToggle";
import { ToggleHeader } from "./childs/ToogleHeader/ToogleHeader";

type HeaderProps = {
  /** Prefijo para los enlaces del menú, que son anclas de la home.
   *  Fuera de la home hay que anteponer "/" para volver a ella. */
  navBase?: string;
};

export const Header = ({ navBase = "" }: HeaderProps) => {
  return (
    <header className="fixed inset-x-0 top-19 z-50 px-4">
      <div className="flex items-center justify-center gap-3">
        <ul className="bg-glass glass hidden h-14 min-w-129.5 items-center justify-between rounded-lg px-8 md:flex">
          {menuItems.map((menuItem) => (
            <li key={menuItem.name} className="ml-4">
              <a
                href={`${navBase}${menuItem.href}`}
                className="font-geist font-bold text-main-text capitalize transition-opacity hover:opacity-60"
              >
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>

        <MobileNav navBase={navBase} />

        {/* Tema y música comparten un mismo panel, separados por una línea */}
        <div className="bg-glass glass flex h-14 items-center rounded-lg">
          <ToggleHeader />
          <span className="h-7 w-px bg-main-text/20" aria-hidden="true" />
          <MusicToggle />
        </div>
      </div>
    </header>
  );
};
