import { ThemeImage } from "@/components/ThemeImage/ThemeImage";

type Cloud = {
  n: number;
  top: string;
  width: string;
  direction: "left" | "right";
  duration: string;
  delay: string;
  opacity?: string;
};

const clouds: Cloud[] = [
  { n: 6, top: "top-[-15%]", width: "w-[22rem]", direction: "right", duration: "55s", delay: "-8s", opacity: "opacity-80" },
  { n: 2, top: "top-[-5%]", width: "w-[25rem]", direction: "left", duration: "72s", delay: "-40s" },
  { n: 4, top: "top-[5%]", width: "w-[26rem]", direction: "right", duration: "63s", delay: "-22s" },
  { n: 1, top: "top-[32%]", width: "w-[22rem]", direction: "left", duration: "80s", delay: "-55s", opacity: "opacity-90" },
  { n: 3, top: "top-[44%]", width: "w-[36rem]", direction: "right", duration: "90s", delay: "-30s" },
  { n: 5, top: "top-[66%]", width: "w-[30rem]", direction: "left", duration: "68s", delay: "-48s" },
];

export const Clouds = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    {clouds.map(({ n, top, width, direction, duration, delay, opacity }) => (
      <div
        key={n}
        className={`absolute left-0 ${top} ${width} ${opacity ?? ""} ${
          direction === "right" ? "animate-float-right" : "animate-float-left"
        } select-none`}
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        <ThemeImage
          lightSrc={`/img/light/clouds/nube-${n}.png`}
          darkSrc={`/img/dark/clouds/nube-${n}.png`}
          width={1000}
          height={1000}
          alt=""
          className="h-auto w-full"
        />
      </div>
    ))}
  </div>
);
