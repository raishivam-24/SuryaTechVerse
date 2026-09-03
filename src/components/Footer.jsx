import React from "react";
import { brand, contact, footer } from "../data.js";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "64px 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 32,
        }}
        className="stv-footer-grid"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 24, color: "var(--gold)" }}>
            {brand.name}
          </div>
          <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
              <span style={{ color: "var(--gold)" }}>📱</span> Contact: {contact.phone}
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
              <span style={{ color: "var(--gold)" }}>✉</span> {contact.businessEmail}
            </p>
          </div>
          <p
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--gold)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              lineHeight: 1.6,
              maxWidth: 380,
              margin: 0,
            }}
          >
            Grow your business with us. Contact now for a consultation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: 12, color: "var(--text-muted)" }}>
            {contact.hashtags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32, alignItems: "flex-start" }} className="stv-footer-links">
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {footer.links.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 14, color: "var(--text-muted)", margin: 0 }}>
            {footer.copyright}
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stv-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .stv-footer-links { align-items: flex-end !important; }
        }
      `}</style>
    </footer>
  );
}
