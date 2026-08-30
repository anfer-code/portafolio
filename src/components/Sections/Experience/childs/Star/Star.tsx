"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Estrella de la sección Experiencia.
 * - En reposo gira sola cada tantos segundos.
 * - Al pasar el mouse viaja al otro extremo de su carril dando una vuelta;
 *   el siguiente hover la devuelve, y así alternando.
 *
 * El viaje (transición) y el giro periódico (animación) van en elementos
 * distintos a propósito: si compartieran elemento competirían por `transform`
 * y la animación pisaría a la transición.
 */
const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

export const Star = () => {
  const [atEnd, setAtEnd] = useState(false);

  return (
    <div className="relative h-12 min-w-20 flex-1 md:max-w-56 lg:w-56 lg:flex-none">
      {/* Capa 1: el viaje de ida y vuelta con flip */}
      <button
        type="button"
        aria-label="Mover la estrella"
        // En un dispositivo táctil un toque dispara mouseenter Y click: si
        // ambos alternaran, la estrella volvería al punto de partida. Por eso
        // cada gesto atiende solo al tipo de puntero que le corresponde.
        onMouseEnter={() => canHover() && setAtEnd((v) => !v)}
        onClick={() => !canHover() && setAtEnd((v) => !v)}
        className={`absolute top-0 cursor-pointer transition-all duration-700 ease-in-out ${
          atEnd ? "left-[calc(100%-3rem)] -rotate-y-180" : "left-0 rotate-y-0"
        }`}
      >
        {/* Capa 2: el giro periódico, independiente del viaje */}
        <Image
          src="/img/star.png"
          alt=""
          width={84}
          height={84}
          className="animate-star-spin size-12"
        />
      </button>
    </div>
  );
};
