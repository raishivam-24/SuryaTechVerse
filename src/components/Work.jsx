import React from "react";
import FadeIn from "./FadeIn.jsx";
import ProjectCarousel from "./ProjectCarousel.jsx";
import { projects } from "../data.js";

export default function Work() {
  return (
    <section id="work" style={{ padding: "160px 0", position: "relative", background: "var(--surface-2)", overflow: "hidden" }}>
      {/* faint decorative serif numeral, editorial-magazine style */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-4vw",
          right: "2vw",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "clamp(140px, 22vw, 320px)",
          color: "rgba(242,202,80,0.035)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        02
      </span>

      <FadeIn style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px", marginBottom: 56, position: "relative", zIndex: 1 }}>
        <span
          style={{
            display: "block",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 16,
            color: "var(--gold)",
            marginBottom: 12,
            letterSpacing: "0.02em",
          }}
        >
          ( Selected Work )
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 4vw, 40px)",
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          Featured Work
        </h2>
        <div style={{ height: 1, width: 96, background: "linear-gradient(to right, var(--gold), transparent)" }} />
      </FadeIn>

      <div style={{ position: "relative", zIndex: 1 }}>
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}