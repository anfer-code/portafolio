import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/Sections/About/About";
import { Cta } from "@/components/Sections/Cta/Cta";
import { Experience } from "@/components/Sections/Experience/Experience";
import { Projects } from "@/components/Sections/Projects/Projects";
import { Stack } from "@/components/Sections/Stack/Stack";
import { LinesArea } from "@/components/LinesArea/LinesArea";
import { SkyArea } from "@/components/SkyArea/SkyArea";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      {/* Sobre mí y Stack comparten el mismo fondo de cuadrícula */}
      <LinesArea>
        <About />
        <Stack />
      </LinesArea>
      {/* Experiencia, contacto y footer comparten un mismo cielo continuo */}
      <SkyArea>
        <Experience />
        <Cta />
        <Footer />
      </SkyArea>
    </>
  );
}
