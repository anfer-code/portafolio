import { LinkedinButton } from "@/components/Buttons/LinkedinButton";
import { MailButton } from "@/components/Buttons/MailButton";
import { CharacterCard } from "./childs/CharacterCard/CharacterCard";

export const About = () => {
  return (
    <section id="sobre-mi" className="w-full pt-14 pb-6 sm:pt-25 sm:pb-10 md:min-h-200">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-center justify-between">
          <div>
            <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
              Hola, soy Anfernee
            </h2>
            <p className="mt-2 text-lg text-secondary-text">/an · fer · ni/</p>
            <p className="mt-2 text-lg text-secondary-text">
              Soy un Frontend Developer que disfruta construir experiencias web
              rápidas, escalables y bien hechas. Con un fuerte enfoque en
              performance, código reutilizable y atención al detalle.
            </p>
            <p className="mt-2 text-lg text-secondary-text">
              Me gusta resolver problemas, optimizar lo que ya existe y crear
              sistemas que escalen sin fricción.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkedinButton
                href="https://www.linkedin.com/in/valeraanfer/"
                bgClass="bg-[#DAAD72] dark:bg-[#171C68]"
                className="w-full justify-center sm:w-auto sm:justify-start"
              />
              <MailButton
                href="mailto:anfervalera11@gmail.com"
                variant="filled"
                className="w-full justify-center sm:w-auto sm:justify-start"
              />
            </div>
          </div>

          <CharacterCard />
        </div>
      </div>
    </section>
  );
};
