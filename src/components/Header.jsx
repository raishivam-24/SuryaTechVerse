import React, { useState } from "react";
import { brand, navLinks, hero } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(19,19,19,0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 24px",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: i === 0 ? 700 : 500,
                textDecoration: "none",
                color: i === 0 ? "var(--gold)" : "var(--text-secondary)",
                borderBottom: i === 0 ? "2px solid var(--gold)" : "2px solid transparent",
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
          style={{
            background: "none",
            border: "none",
            color: "var(--gold)",
            fontSize: 26,
            cursor: "pointer",
            padding: 8,
          }}
        >
          ☰
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
            background: "rgba(10,10,10,0.9)",
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
