import React from "react";
import ProjectCarousel from "./ProjectCarousel.jsx";
import { projects } from "../data.js";

export default function Work() {
  return (
    <section id="work" style={{ padding: "160px 0", position: "relative", background: "var(--surface-2)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px", marginBottom: 56 }}>
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
      </div>

      <ProjectCarousel projects={projects} />
    </section>
  );
}