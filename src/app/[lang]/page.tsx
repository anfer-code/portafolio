import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { LinesArea } from "@/components/LinesArea/LinesArea";
import { About } from "@/components/Sections/About/About";
import { Cta } from "@/components/Sections/Cta/Cta";
import { Experience } from "@/components/Sections/Experience/Experience";
import { Projects } from "@/components/Sections/Projects/Projects";
import { Stack } from "@/components/Sections/Stack/Stack";
import { SkyArea } from "@/components/SkyArea/SkyArea";
import type { Locale } from "@/i18n/config";

export default async function Home(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  const locale = lang as Locale;

  return (
    <>
      <Header locale={locale} />
      <Hero locale={locale} />
      <Projects locale={locale} />
      {/* Sobre mí y Stack comparten el mismo fondo de cuadrícula */}
      <LinesArea>
        <About locale={locale} />
        <Stack locale={locale} />
      </LinesArea>
      {/* Experiencia, contacto y footer comparten un mismo cielo continuo */}
      <SkyArea>
        <Experience locale={locale} />
        <Cta locale={locale} />
        <Footer />
      </SkyArea>
    </>
  );
}
