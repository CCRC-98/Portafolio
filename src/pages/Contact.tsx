import type { ReactNode } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  WhatsAppIcon,
} from "../assets/icons/iconIndex";
import {
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "../data/contact";

type ContactRowProps = {
  icon: ReactNode;
  iconClassName: string;
  label: string;
  value: string;
  href?: string;
};

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-blue-500 dark:text-gray-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ContactRow({
  icon,
  iconClassName,
  label,
  value,
  href,
}: ContactRowProps) {
  const baseClasses =
    "group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3 transition";

  const content = (
    <>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
          {label}
        </span>
        <span className="block truncate text-sm font-semibold text-gray-800 dark:text-gray-100">
          {value}
        </span>
      </span>
      {href ? <ArrowIcon /> : null}
    </>
  );

  if (!href) {
    return <div className={baseClasses}>{content}</div>;
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseClasses} hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40 dark:hover:bg-white/10`}
    >
      {content}
    </a>
  );
}

export function Contact() {
  return (
    <section className="grow">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Contacto
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              ¿Hablamos?
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Desarrollador de software junior con muchas ganas de aprender y
              crecer. Si el reto es nuevo, se estudia y se saca adelante. Elige
              el canal que prefieras y te responderé lo antes posible.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 dark:bg-gray-900 dark:ring-white/10">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Información de contacto
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Escríbeme directamente por WhatsApp o correo.
            </p>

            <div className="mt-6 space-y-3">
              <ContactRow
                href={WHATSAPP_URL}
                icon={<WhatsAppIcon className="h-6 w-6" />}
                iconClassName="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                label="WhatsApp"
                value="+57 311 207 6414"
              />
              <ContactRow
                href={EMAIL_URL}
                icon={<MailIcon className="h-6 w-6" />}
                iconClassName="bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                label="Correo"
                value="camilocapera1998@gmail.com"
              />
            </div>

            <div className="my-6 h-px bg-gray-100 dark:bg-white/10" />

            <div className="space-y-3">
              <ContactRow
                icon={<LocationIcon className="h-6 w-6" />}
                iconClassName="bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-300"
                label="Ubicación"
                value="Bucaramanga, Colombia"
              />
              <ContactRow
                href={GITHUB_URL}
                icon={<GitHubIcon className="h-6 w-6" />}
                iconClassName="bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200"
                label="GitHub"
                value="github.com/CCRC-98"
              />
              <ContactRow
                href={LINKEDIN_URL}
                icon={<LinkedInIcon className="h-6 w-6" />}
                iconClassName="bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200"
                label="LinkedIn"
                value="Cristian Camilo Rodriguez"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
