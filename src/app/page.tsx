import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/Sections/About/About";
import { Cta } from "@/components/Sections/Cta/Cta";
import { Experience } from "@/components/Sections/Experience/Experience";
import { Projects } from "@/components/Sections/Projects/Projects";
import { Stack } from "@/components/Sections/Stack/Stack";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Stack />
      <Experience />
      <Cta />
      <Footer />
    </>
  );
}
