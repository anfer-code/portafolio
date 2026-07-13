"use client";

import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { menuItems } from "@/data/nav";
import { useState } from "react";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="bg-glass glass flex size-14 items-center justify-center rounded-lg text-main-text"
      >
        {open ? (
          <CloseIcon className="size-6" />
        ) : (
          <MenuIcon className="size-6" />
        )}
      </button>

      {open && (
        <ul className="bg-glass glass absolute top-16 right-0 flex min-w-44 flex-col gap-1 rounded-lg p-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-4 py-3 font-bold text-main-text capitalize transition-opacity hover:opacity-60"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
