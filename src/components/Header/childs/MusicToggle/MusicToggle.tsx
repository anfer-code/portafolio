"use client";

import Image from "next/image";
import { pickTrack } from "@/data/soundtracks";
import { useIsDark } from "@/hooks/useIsDark";
import { useEffect, useRef, useState } from "react";

/**
 * Reproductor de música ambiente, con set distinto según el tema.
 *
 * Rendimiento:
 * - `preload="none"`: no se descarga nada hasta que se da play.
 * - El `src` se asigna dentro del gesto del usuario, no al renderizar: así no
 *   hace falta sortear la pista en un efecto ni hay riesgo de desajuste de
 *   hidratación (servidor y cliente pintan lo mismo).
 */
export const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isDark = useIsDark();
  const [playing, setPlaying] = useState(false);

  // Si cambia el tema mientras suena, salta al set correspondiente.
  // Se consulta `audio.paused` en vez de guardar el estado en una dependencia:
  // el propio elemento ya es la fuente de verdad de si está sonando.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    audio.src = pickTrack(isDark).src;
    audio.play().catch(() => {});
  }, [isDark]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      return;
    }

    // Primera reproducción: recién aquí se elige la pista y se pide el archivo.
    if (!audio.src) audio.src = pickTrack(isDark).src;

    try {
      await audio.play();
    } catch {
      // El navegador puede rechazar la reproducción; se queda en pausa.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        aria-pressed={playing}
        className="flex h-14 w-15 items-center justify-center"
      >
        {/* Los assets son negros: se invierten en modo oscuro para que contrasten */}
        <Image
          src={playing ? "/img/music.png" : "/img/music-off.png"}
          alt=""
          width={20}
          height={20}
          className="size-5 object-contain dark:invert"
        />
      </button>

      {/* El estado visual se deriva de los eventos del propio elemento,
          así el botón nunca se desincroniza de lo que realmente suena. */}
      <audio
        ref={audioRef}
        preload="none"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </>
  );
};
