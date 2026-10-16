import type { ComponentType } from "react";
import {
  CSharpIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  MakeIcon,
  MySqlIcon,
  N8NIcon,
  NestJsIcon,
  NetCoreIcon,
  NodeIcon,
  PostgreSqlIcon,
  PrismaIcon,
  ReactIcon,
  ReactRouterIcon,
  SqlServerIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../assets/icons/iconIndex";

type Tool = { name: string; Icon: ComponentType<{ className?: string }> };

type SkillGroup = {
  id: string;
  title: string;
  bullets: string[];
  tools: Tool[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    bullets: [
      "Desarrollo de APIs REST",
      "Diseño de servicios",
      "Autenticación y autorización",
      "Integración de servicios externos",
      "Node.js / TypeScript",
      "C# / .NET",
    ],
    tools: [
      { name: "TypeScript", Icon: TypeScriptIcon },
      { name: "Node", Icon: NodeIcon },
      { name: "Express", Icon: ExpressIcon },
      { name: "Nest", Icon: NestJsIcon },
      { name: "C Sharp", Icon: CSharpIcon },
      { name: ".Net Core", Icon: NetCoreIcon },
    ],
  },
  {
    id: "database",
    title: "Bases de datos",
    bullets: [
      "Modelado relacional",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "Prisma",
      "Entity Framework",
    ],
    tools: [
      { name: "PostgreSQL", Icon: PostgreSqlIcon },
      { name: "MySQL", Icon: MySqlIcon },
      { name: "SQL Server", Icon: SqlServerIcon },
      { name: "Prisma ORM", Icon: PrismaIcon },
      { name: "Entity Framework", Icon: NetCoreIcon },
    ],
  },
  {
    id: "architecture",
    title: "Arquitectura",
    bullets: [
      "SOLID",
      "Clean Architecture",
      "Arquitectura Hexagonal",
      "DDD",
      "Monolitos modulares",
    ],
    tools: [],
  },
  {
    id: "frontend",
    title: "Frontend",
    bullets: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind",
      "Consumo de APIs",
      "Guards",
      "Formularios",
      "Lógica y orquestación de aplicaciones",
    ],
    tools: [
      { name: "TypeScript", Icon: TypeScriptIcon },
      { name: "React", Icon: ReactIcon },
      { name: "React Router", Icon: ReactRouterIcon },
      { name: "Tailwind", Icon: TailwindIcon },
    ],
  },
  {
    id: "tools",
    title: "Herramientas",
    bullets: [
      "Control de versiones",
      "Contenedores y despliegues",
      "Automatización de flujos",
      "Integración de aplicaciones",
    ],
    tools: [
      { name: "Git", Icon: GitIcon },
      { name: "Docker", Icon: DockerIcon },
      { name: "n8n", Icon: N8NIcon },
      { name: "Make", Icon: MakeIcon },
    ],
  },
];

const PROFESSIONAL_SKILLS = [
  "Resolución de problemas",
  "Pensamiento lógico y analítico",
  "Aprendizaje autónomo",
  "Análisis y diseño de soluciones",
  "Adaptabilidad tecnológica",
];

const PROFESSIONAL_ID = "professional-competencies";

const NAV_SECTIONS = [
  ...SKILL_GROUPS.map(({ id, title }) => ({ id, label: title })),
  { id: PROFESSIONAL_ID, label: "Habilidades profesionales" },
];

function SkillCard({ id, title, bullets, tools }: SkillGroup) {
  const hasTools = tools.length > 0;

  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 dark:bg-gray-900 dark:ring-white/10"
    >
      <h3 className="font-semibold text-gray-700 dark:text-white">{title}</h3>

      <div
        className={
          hasTools
            ? "mt-6 grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start"
            : "mt-6"
        }
      >
        <ul className="space-y-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-500 dark:text-gray-300"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
              />
              {bullet}
            </li>
          ))}
        </ul>

        {hasTools && (
          <ul className="mt-6 flex flex-wrap gap-2 sm:gap-2.5 md:mt-0">
            {tools.map(({ name, Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
              >
                <Icon className="h-5 w-5" />
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Competencies() {
  return (
    <section className="grow">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
          Áreas de competencia
        </h1>

        <nav
          aria-label="Secciones de la página"
          className="mt-6 flex gap-2 overflow-x-auto pb-1 lg:hidden"
        >
          {NAV_SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-8 lg:flex lg:-mx-6 xl:mt-16">
          <aside className="hidden lg:sticky lg:top-24 lg:mx-12 lg:block lg:w-48 lg:shrink-0 lg:self-start">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              <a href="#technical-competencies">Competencias técnicas</a>
            </h2>

            <ul className="mt-4 space-y-3">
              {SKILL_GROUPS.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="block text-sm text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">
              <a href={`#${PROFESSIONAL_ID}`}>Habilidades profesionales</a>
            </h2>
          </aside>

          <section className="min-w-0 flex-1 px-6">
            <h2
              id="technical-competencies"
              className="scroll-mt-24 pt-8 font-semibold text-gray-900 lg:pt-0 dark:text-white"
            >
              Competencias técnicas
            </h2>

            <div className="mt-6 space-y-6 lg:mt-8 lg:space-y-8">
              {SKILL_GROUPS.map((group) => (
                <SkillCard key={group.id} {...group} />
              ))}
            </div>

            <h2
              id={PROFESSIONAL_ID}
              className="mt-12 scroll-mt-24 font-semibold text-gray-900 lg:mt-16 dark:text-white"
            >
              Habilidades profesionales
            </h2>

            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:mt-8 dark:bg-gray-900 dark:ring-white/10">
              <ul className="space-y-2">
                {PROFESSIONAL_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-500 dark:text-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
