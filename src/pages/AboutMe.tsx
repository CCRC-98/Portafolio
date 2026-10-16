import {
  CSharpIcon,
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  NetCoreIcon,
  NodeIcon,
  ReactIcon,
  TypeScriptIcon,
  WhatsAppIcon,
} from "../assets/icons/iconIndex";
import {
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "../data/contact";

const TECHNOLOGIES = [
  { name: "C#", Icon: CSharpIcon },
  { name: ".NET", Icon: NetCoreIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "React", Icon: ReactIcon },
];

const QUICK_LINKS = [
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: "Correo", href: EMAIL_URL, Icon: MailIcon },
  { label: "GitHub", href: GITHUB_URL, Icon: GitHubIcon },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedInIcon },
];

type QuickLinkProps = (typeof QUICK_LINKS)[number];

function QuickLink({ label, href, Icon }: QuickLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:h-10 sm:w-10"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

export function AboutMe() {
  return (
    <section className="grow">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-10 lg:gap-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-6 shadow-xl shadow-blue-900/10 ring-1 ring-white/10 sm:p-7 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 text-white">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Portafolio
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Disponible
                </span>
              </div>

              <div>
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                  CR
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Cristian Camilo Rodriguez
                </p>
                <p className="text-sm text-white/80">
                  Desarrollador de software
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/80">
                  <LocationIcon className="h-4 w-4" />
                  Bucaramanga, Colombia
                </p>
              </div>

              <div className="border-t border-white/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Contacto rápido
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {QUICK_LINKS.map((link) => (
                    <QuickLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Perfil
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl dark:text-white">
              Desarrollador de software
            </h1>

            <p className="mt-2 text-lg font-medium text-blue-600 dark:text-blue-400">
              .NET · Node · React
            </p>

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Tecnólogo en Análisis y Desarrollo de Software, enfocado
              principalmente en desarrollo backend con C#, .NET, Node.js y
              TypeScript. Experiencia en construcción de APIs REST, integración
              de servicios externos, autenticación y manejo de bases de datos
              como SQL Server y PostgreSQL.
            </p>

            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-gray-500 dark:text-gray-400">
              También cuento con conocimientos en React y TypeScript para el
              desarrollo de la lógica y funcionalidad del frontend, incluyendo
              consumo de APIs, rutas, guards, formularios y orquestación de
              flujos. Mi fortaleza está en la parte funcional y de integración,
              mientras que para diseño y maquetación suelo apoyarme en
              plantillas y componentes existentes.
            </p>

            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Me caracterizo por el aprendizaje continuo, la resolución de
              problemas y la construcción de soluciones mantenibles y orientadas
              a resultados.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Tecnologías principales
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                {TECHNOLOGIES.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600 sm:px-3 sm:py-2 sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
                  >
                    <Icon className="h-5 w-5" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
