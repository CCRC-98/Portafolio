import { NavLink } from "react-router";

const LINKS = [
  { to: "/aboutme", label: "Sobre mí" },
  { to: "/competencies", label: "Competencias" },
  { to: "/contact", label: "Contacto" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <NavLink
          to="/aboutme"
          className="flex shrink-0 items-center gap-2.5 text-base font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            CR
          </span>
          <span className="hidden sm:inline">Cristian C. Rodriguez</span>
        </NavLink>

        <div className="flex items-center gap-1 overflow-x-auto">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
