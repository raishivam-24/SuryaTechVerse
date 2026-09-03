import React from "react";
import { about } from "../data.js";

export default function About() {
  return (
    <section id="about" style={{ padding: "160px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 80 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4vw, 40px)",
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            {about.title}
          </h2>
          <div style={{ height: 1, width: 96, background: "linear-gradient(to right, var(--gold), transparent)" }} />
        </div>

        <div className="stv-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
          <div className="stv-col-8 glass-panel" style={{ borderRadius: 20, padding: "48px 40px", border: "1px solid var(--border)" }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: 28,
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              {about.mission.heading}
            </h3>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 28 }}>
              {about.mission.body}
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {about.mission.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 18px",
                    border: "1px solid var(--border-strong)",
                    borderRadius: 999,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 13,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="stv-col-4"
            style={{
              borderRadius: 20,
              padding: 32,
              border: "1px solid rgba(212,175,55,0.3)",
              background: "linear-gradient(160deg, rgba(212,175,55,0.08), rgba(106,46,224,0.08))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(242,202,80,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  fontSize: 24,
                  color: "var(--gold)",
                }}
              >
                ✦
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 22, color: "var(--text-primary)", marginBottom: 4 }}>
                {about.founder.name}
              </h4>
              <p
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--gold)",
                  marginBottom: 20,
                }}
              >
                {about.founder.role}
              </p>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, lineHeight: 1.6, color: "var(--text-secondary)", fontStyle: "italic" }}>
                "{about.founder.quote}"
              </p>
            </div>
          </div>

          <div
            className="stv-col-4 glass-panel"
            style={{
              borderRadius: 20,
              padding: 32,
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 52,
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                {about.stat.value}
              </span>
              <span
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--text-secondary)",
                }}
              >
                {about.stat.label}
              </span>
            </div>
          </div>

          <div className="stv-col-8 glass-panel" style={{ borderRadius: 20, padding: 32, border: "1px solid var(--border)" }}>
            <h4
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: "var(--text-primary)",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(242,202,80,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "var(--gold)",
                }}
              >
                🎓
              </span>
              {about.education.heading}
            </h4>
            <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, lineHeight: 1.6, color: "var(--text-secondary)" }}>
              {about.education.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
