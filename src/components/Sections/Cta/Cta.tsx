import { LinkedinButton } from "@/components/Buttons/LinkedinButton";
import { MailButton } from "@/components/Buttons/MailButton";

export const Cta = () => (
  <section id="contacto" className="px-6 py-16">
    <div className="glass mx-auto max-w-2xl rounded-2xl bg-glass px-8 py-12 text-center">
      <h2 className="font-comic text-3xl text-main-text sm:text-4xl">
        ¿Tienes una buena oportunidad en mente?
      </h2>

      <p className="mx-auto mt-4 max-w-md text-main-text">
        Estoy abierto a nuevos retos como Frontend Developer en equipos remotos.
        Si crees que encajo en lo que están construyendo, hablemos.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <LinkedinButton
          href="https://www.linkedin.com/in/valeraanfer/"
          bgClass="bg-[#DAAD72] dark:bg-[#171C68]"
          className="w-full justify-center sm:w-auto"
        />
        <MailButton
          href="mailto:anfervalera11@gmail.com"
          variant="filled"
          className="w-full justify-center sm:w-auto"
        />
      </div>
    </div>
  </section>
);
