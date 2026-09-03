import React from "react";
import Marquee from "./Marquee.jsx";
import { team } from "../data.js";

export default function Team() {
  return (
    <section id="team" style={{ padding: "160px 0", background: "var(--surface-2)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px", marginBottom: 64, textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 40px)",
            color: "var(--text-primary)",
            marginBottom: 12,
          }}
        >
          Meet The Experts
        </h2>
        <div style={{ height: 1, width: 96, background: "linear-gradient(to right, transparent, var(--gold), transparent)", margin: "0 auto 16px" }} />
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, color: "var(--text-secondary)" }}>
          The minds driving digital excellence.
        </p>
      </div>

      <Marquee reverse>
        {team.map((m) => (
          <div
            key={m.name}
            className="glass-panel"
            style={{
              width: 280,
              flex: "0 0 auto",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                height: 200,
                background: "linear-gradient(160deg, rgba(212,175,55,0.18), rgba(106,46,224,0.18))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: 42,
                fontWeight: 700,
                color: "var(--gold)",
              }}
            >
              {m.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div style={{ padding: 24, textAlign: "center" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 18, color: "var(--text-primary)", marginBottom: 4 }}>
                {m.name}
              </h4>
              <p
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--gold)",
                }}
              >
                {m.role}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
