import React from "react";
import { about } from "../data.js";

export default function About() {
  return (
    <section id="about" style={{ padding: "160px 0", background: "var(--bg)" }}>
      <div
        className="stv-about-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* Photo — inspired by the reference's rings-behind-portrait treatment,
            recolored to this site's gold accent instead of orange. */}
        <div style={{ position: "relative" }}>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -24,
              left: -24,
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "2px solid var(--border-strong)",
              zIndex: 0,
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -12,
              left: -12,
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "2px solid var(--gold)",
              opacity: 0.5,
              zIndex: 0,
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--border-strong)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              aspectRatio: "4 / 4.6",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src="/founder.png"
              alt={about.founder.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
            }}
          >
            <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            About Us
            <span style={{ width: 40, height: 1, background: "var(--gold)", display: "inline-block" }} />
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--text-primary)",
              marginBottom: 20,
            }}
          >
            {about.mission.heading}
          </h2>

          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 20 }}>
            We engineer digital experiences at the intersection of creative ambition and technical precision.
          </p>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 32 }}>
            "{about.founder.quote}" — <strong style={{ color: "var(--text-primary)" }}>{about.founder.name}</strong>, {about.founder.role}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 36 }}>
            <div>
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 34, color: "var(--gold)" }}>
                {about.stat.value}
              </span>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-secondary)" }}>
                {about.stat.label}
              </span>
            </div>
            {about.mission.tags.map((tag) => (
              <div key={tag}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--text-primary)",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: "var(--text-secondary)" }}>Core Value</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "var(--gold-container)",
              color: "var(--on-gold)",
              padding: "15px 32px",
              borderRadius: 999,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Read More
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .stv-about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}