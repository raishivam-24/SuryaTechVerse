import React, { useEffect, useState } from "react";
import { brand, navLinks, hero } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(10,10,10,0.75)" : "rgba(19,19,19,0.35)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.2)" : "1px solid var(--border)",
        boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.35)" : "none",
        transition: "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 24px",
          height: scrolled ? 68 : 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "height 0.35s ease",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "var(--gold)",
            textDecoration: "none",
          }}
        >
          {brand.name}
        </a>

        <div style={{ display: "none", gap: 32, alignItems: "center" }} className="stv-nav">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="stv-link-underline"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: i === 0 ? 700 : 500,
                textDecoration: "none",
                color: i === 0 ? "var(--gold)" : "var(--text-secondary)",
                paddingBottom: 4,
                transition: "color 0.3s",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={hero.headerCta.href}
          className="stv-cta-desktop glow-gold"
          style={{
            display: "none",
            background: "var(--gold-container)",
            color: "var(--on-gold)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "12px 24px",
            borderRadius: 999,
            textDecoration: "none",
            gap: 8,
            transition: "box-shadow 0.3s, transform 0.2s",
          }}
        >
          {hero.headerCta.label} →
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="stv-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            color: "var(--gold)",
            fontSize: 26,
            cursor: "pointer",
            padding: 8,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            background: "rgba(10,10,10,0.92)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
