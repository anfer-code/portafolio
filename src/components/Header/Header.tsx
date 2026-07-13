import { menuItems } from "@/data/nav";
import { MobileNav } from "./childs/MobileNav/MobileNav";
import { ToggleHeader } from "./childs/ToogleHeader/ToogleHeader";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-19 z-50 px-4">
      <div className="flex items-center justify-center gap-3">
        <ul className="bg-glass glass hidden h-14 min-w-129.5 items-center justify-between rounded-lg px-8 md:flex">
          {menuItems.map((menuItem) => (
            <li key={menuItem.name} className="ml-4">
              <a
                href={menuItem.href}
                className="font-geist font-bold text-main-text capitalize transition-opacity hover:opacity-60"
              >
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>

        <MobileNav />

        <ToggleHeader />
      </div>
    </header>
  );
};
