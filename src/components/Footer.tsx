import { GitHubIcon, LinkedInIcon, MailIcon } from "../assets/icons/iconIndex";
import { EMAIL } from "../data/contact";

const CONTACT_LINKS = [
  {
    href: "https://github.com/CCRC-98",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/cristian-camilo-rodriguez-12ba37147/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: `mailto:${EMAIL}`,
    label: "Correo",
    Icon: MailIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/70 bg-white dark:border-white/10 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} Cristian Camilo Rodriguez. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-2">
          {CONTACT_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-blue-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
