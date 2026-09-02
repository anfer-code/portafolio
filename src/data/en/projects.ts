import type { Project } from "../types";

/**
 * Versión en inglés del contenido de proyectos.
 *
 * Los campos que no son texto —`slug`, imágenes, `glow`, `stack` y los `score`
 * del marcador— se mantienen idénticos al español a propósito: son la misma
 * página en otro idioma, no otro proyecto.
 *
 * Cuidado con `metrics[].label` y `headline.label`: se pintan en mayúsculas con
 * Press Start 2P, que no trae vocales acentuadas en caja alta. En inglés no
 * suele haber tildes, pero la regla sigue valiendo.
 */
export const projects: Project[] = [
  {
    slug: "futbol-sites",
    title: "Futbol Sites",
    tagline:
      "A network of 25+ football sites serving millions of visits a day.",
    imageLight: "/img/futbol-portada-light.jpg",
    imageDark: "/img/futbol-portada-dark.jpg",
    glow: "#D8122F",

    kind: "Digital media",
    role: "Semi-Senior Frontend Developer",
    period: "Jul 2022 — Jul 2026",
    duration: "4 years",
    team: "Distributed product team, with front, back, SEO and ads",
    live: { label: "Visit site", href: "https://www.futbolsites.net/" },

    summary:
      "Futbol Sites is Better Collective's sports media network in Latin America: football news, live scores, tables and stats sites that together move millions of visits a day. I joined in July 2022 and, throughout my time at the company, kept that network running alongside the product team.",
    challenge:
      "At Futbol Sites the sites share components, services and architecture, so any change has to be built to scale from the very first moment.\nIn this project every site has its own particularities, whether in business or in region, and that demands a lot of attention to detail while developing.\nOn top of that comes the performance challenge. The sites load advertising and dynamic content, which makes meeting the Core Web Vitals harder; building solutions that let the ads coexist with the content while the pages still load fast is a constant challenge.",

    contributions: [
      {
        title: "Architecture and new sites",
        items: [
          "Launching new sites on top of the project's base architecture, either reusing its many services and components or adapting them to the context.",
          "Building reusable components that several sites in the network use today.",
          "Cross-team features designed from the start to scale across the whole network, not a single site.",
        ],
      },
      {
        title: "Performance and Core Web Vitals",
        items: [
          "Optimising LCP, CLS and INP on sites carrying heavy advertising and dynamic content.",
          "Weighing the real cost of every third-party script before it went into the bundle.",
          "Tuning images, fonts and lazy loading so the content arrives before the ads do.",
        ],
      },
      {
        title: "Monetisation",
        items: [
          "Implementing and maintaining AdSense and Optidigital as monetisation systems.",
          "Fitting the ad slots in without breaking the layout or spiking CLS.",
        ],
      },
      {
        title: "Operations and quality",
        items: [
          "Running production deployments and keeping the sites healthy over time.",
          "Monitoring, diagnosing and fixing bugs reported from production.",
          "Technical tracking and documentation of tasks in JIRA.",
        ],
      },
    ],

    headline: { value: "+5M", label: "daily users" },
    metrics: [
      { label: "Active sites in the network", score: "0027" },
      { label: "LCP cut across the network", score: "-40%" },
      { label: "TTFB cut across the network", score: "-30%" },
      { label: "AdSense and Optidigital integrated", score: "0002" },
    ],

    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Git",
      "AdSense",
      "Optidigital",
      "JIRA",
    ],

    shots: [
      {
        alt: "Home page of one of the sites in the network",
        caption: "Bolavip, the flagship site of Futbol Sites",
        src: "/img/home-futbolsites.jpeg",
      },
      {
        alt: "League table with live scores",
        caption: "League table with live scores",
        src: "/img/tables-futbolsites.jpeg",
      },
    ],

    learnings: [
      {
        title: "Scaling for real",
        body: "A component serving 25 sites is designed differently from one serving a single site. I learned to think about the component's API before its markup.",
      },
      {
        title: "Ads vs. performance",
        body: "Advertising isn't negotiable in a media company, so the real job is making it coexist with the Core Web Vitals instead of fighting it.",
      },
      {
        title: "Teamwork",
        body: "Working on a team of more than ten people makes you understand how much the soft skills matter: communication, empathy, ownership, responsibility. I'm grateful to my team for making me a better professional and a better person.",
      },
      {
        title: "Staying 4 years",
        body: "Watching a project grow over years forces you to write code your future self can read. It's the best school of maintainability I know.",
      },
    ],
  },

  {
    slug: "one-rides",
    title: "One Rides",
    tagline:
      "Rides and deliveries: end-to-end features across Android, iOS, backend and web.",
    imageLight: "/img/oneride-portada-light.jpg",
    imageDark: "/img/oneride-portada-dark.jpg",
    glow: "#22c55e",

    kind: "Rides and delivery - Project",
    role: "Full stack developer: mobile, web and backend",
    period: "Jun 2026 — Present",
    duration: "2 months",
    team: "Three developers across backend, native apps and panels",
    live: { label: "See on the store", href: "https://play.google.com/store/apps/details?id=com.onerides.customer&hl=es_VE" },

    summary:
      "One Rides is a ride-hailing and delivery platform operating in Venezuela, with native apps for passengers and drivers, a Node backend and seven web panels. Two fellow developers and I took them on as clients to maintain and grow that system: twelve repositories in production, four platforms moving in parallel.",
    challenge:
      "A demanding project and a system with many moving parts: one backend, seven web panels and four native applications.\nEvery new feature has to be configurable from the different panels, complete in the interface, and backed by the business logic on the server side. Here, constantly monitoring the four applications is the rule, so any problem gets spotted and solved early.",

    contributions: [
      {
        title: "Payments and wallet",
        items: [
          "Integrating instant bank transfer payments (Pago Móvil, Venezuela's instant payment system): automatic confirmation by webhook, top-up approvals and claims by reference number.",
          "A directory of linked payment numbers, with OTP verification and rejection of numbers already in use on another account.",
          "Amount entry in the style of Venezuelan banking, right to left, mirrored across Android, iOS and the web panel.",
        ],
      },
      {
        title: "Stability in production",
        items: [
          "Diagnosing and fixing the driver app crashing when a ride came in with the screen locked.",
          "Fixing the chat socket handling so the conversation closes when a ride is cancelled or reassigned, and the new driver never sees what was said to the previous one.",
          "Fixing the iOS launch loop with an expired session, which left the app stuck on the loading screen and never getting past it.",
        ],
      },
      {
        title: "Dispatch integrity",
        items: [
          "Hardening the app against autoclickers, with detection on the phone itself, validation on the server and a change in the UI.",
          "An exclusive assignment window for favourite drivers, configurable from the backend.",
          "Driver blocking from the passenger app, connected across the API, the admin panel and all four apps, so a blocked driver never receives that passenger's rides again.",
        ],
      },
      {
        title: "Cross-platform and tooling",
        items: [
          "Building multiple new features and improvements across the different platforms, each in its own technology.",
          "An isolated local environment and a QA deployment, both documented so the rest of the team can repeat them.",
          "Technical documentation for every feature and task tracking in ClickUp.",
        ],
      },
    ],

    headline: { value: "12", label: "repos in parallel" },
    metrics: [
      { label: "Driver app crashes addressed", score: "5100" },
      { label: "Commits in two months of work", score: "0174" },
      { label: "Platforms maintained in parallel", score: "0004" },
      { label: "Releases published to the stores", score: "0003" },
    ],

    stack: [
      "TypeScript",
      "Node.js",
      "Git",
      "Kotlin",
      "Swift",
      "Angular",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "ClickUp",
    ],

    shots: [
      {
        alt: "Ride request screen in the passenger app",
        caption: "Ride request in the passenger app",
        src: "/img/oneride-viaje-16x10.jpg",
        full: "/img/oneride-viaje.jpeg",
      },
      {
        alt: "Mobile payment flow validating the bank reference",
        caption: "Validating the mobile payment",
        src: "/img/oneride-pagomovil-16x10.jpg",
        full: "/img/oneride-pagomovil.jpeg",
      },
    ],

    learnings: [
      {
        title: "Autoclickers",
        body: "Some drivers were using autoclickers to hoard rides. The fix was split across fronts: accepting is now a swipe, which rules out the most common trick, and the server rejects automated acceptances on top of that.",
      },
      {
        title: "A test environment",
        body: "When I joined, every test was run straight in production. After a lot of explaining, we convinced the client to set up a test environment: no user runs into a $0.01 ride any more.",
      },
      {
        title: "Favourites first",
        body: "The app let you mark drivers as favourites, but it changed nothing. Now favourites get an exclusive time window before the rest.",
      },
      {
        title: "Nobody loses money",
        body: "Cancelling a ride used to leave money stranded. Now everything owed comes back, the penalty is covered with what was already paid, and the app says the rest returns to the wallet.",
      },
    ],
  },
];
