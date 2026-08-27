import { useState } from "react";
import NavLink from "./ui/NavLink.jsx";
import { NAV, CONTACT } from "../data/content.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex justify-between items-center px-10 py-2 text-xs bg-ink-deep text-line">
        <span className="font-mono tracking-wide">{CONTACT.email}</span>
        <span className="font-mono tracking-wide">{CONTACT.location} · Mon–Fri, 9:00–18:00 IST</span>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5 md:px-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center font-headline font-semibold text-sm bg-ink text-bronze">
              S
            </div>
            <span className="font-headline font-semibold text-xl tracking-tight text-ink">
              SuryaTechVerse
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((l, i) => (
              <NavLink key={l} active={i === 0} href={`#${l.toLowerCase()}`}>
                {l}
              </NavLink>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2.5 rounded-sm text-[12.5px] font-medium tracking-wide uppercase bg-ink text-bronze hover:bg-ink-deep transition-colors"
          >
            Start a Project
          </a>

          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-sm border border-line"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span className="block w-4 h-[1.5px] bg-ink" />
              <span className="block w-4 h-[1.5px] bg-ink" />
              <span className="block w-4 h-[1.5px] bg-ink" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-4 px-5 pb-6 border-t border-line">
            {NAV.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-wide pt-4 text-slate"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
