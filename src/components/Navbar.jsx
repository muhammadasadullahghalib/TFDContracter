import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const navClass = ({ isActive }) =>
  `px-3 py-2 rounded-full text-sm uppercase tracking-[0.18em] transition ${
    isActive
      ? "bg-[var(--ink)] text-white"
      : "text-[var(--ink)] hover:bg-white/70"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[var(--ink)] text-white grid place-items-center font-semibold">
            TFD.
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--forest)]">TFD.</p>
            <p className="text-xs text-[var(--sage)]">General Contractor</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass} end>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-sm text-[var(--forest)] font-medium">Call: (555) 013-4421</span>
          <button className="rounded-full bg-[var(--clay)] px-4 py-2 text-sm text-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            Get Quote
          </button>
        </div>
        <button
          className="lg:hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/70 bg-white/80 px-6 py-4">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navClass}
                end
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button className="mt-2 rounded-full bg-[var(--clay)] px-4 py-2 text-sm text-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
