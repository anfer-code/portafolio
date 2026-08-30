export const Footer = () => (
  <footer className="relative mt-16">
    {/* Franja de pasto pixelado: es decoración, por eso va como background */}
    <div className="flex h-[237px] w-full items-center justify-center bg-[url('/img/light/footer-grass.png')] bg-[length:1440px_237px] bg-bottom bg-repeat-x pt-16 dark:bg-[url('/img/dark/footer-grass.png')]">
      <p className="px-6 text-center font-sans text-lg text-main-text sm:text-[30px]">
        © 2026 · Made with ☕ and ❤️
      </p>
    </div>
  </footer>
);
