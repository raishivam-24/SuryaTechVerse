import React from "react";
import { services } from "../data.js";

function ServiceCard({ service, index, spanClass, minHeight }) {
  return (
    <div
      className={`service-card glass-panel ${spanClass}`}
      style={{
        borderRadius: 20,
        padding: 32,
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          minHeight,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span className="service-icon" style={{ fontSize: 42, lineHeight: 1 }}>
            {service.icon}
          </span>
          <span
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 14,
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 24,
              letterSpacing: "0.02em",
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            {service.title}
          </h3>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, lineHeight: 1.5, color: "var(--text-secondary)" }}>
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [s0, s1, s2, s3, s4, s5, s6, s7] = services;

  return (
    <section id="services" style={{ padding: "160px 0", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          zIndex: 0,
          opacity: 0.5,
        }}
        className="glow-indigo"
      />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            marginBottom: 80,
          }}
          className="stv-services-header"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4vw, 40px)",
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              Our Services
            </h2>
            <div style={{ height: 1, width: 96, background: "linear-gradient(to right, var(--gold), transparent)" }} />
          </div>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, color: "var(--text-secondary)", maxWidth: 480 }}>
            Tailored strategies and meticulous execution designed for high-stakes business environments.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="stv-bento-grid">
          <ServiceCard service={s0} index={0} spanClass="stv-bento-8" minHeight={300} />
          <ServiceCard service={s1} index={1} spanClass="stv-bento-4" minHeight={300} />

          <ServiceCard service={s2} index={2} spanClass="stv-bento-4" minHeight={300} />
          <div className="stv-bento-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <ServiceCard service={s3} index={3} spanClass="" minHeight={250} />
            <ServiceCard service={s4} index={4} spanClass="" minHeight={250} />
          </div>

          <ServiceCard service={s5} index={5} spanClass="stv-bento-8" minHeight={280} />
          <ServiceCard service={s6} index={6} spanClass="stv-bento-4" minHeight={280} />

          <div
            className="stv-bento-12 service-card glass-panel"
            style={{
              borderRadius: 20,
              padding: 32,
              border: "1px solid var(--border)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ fontSize: 42 }}>{s7.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, fontSize: 24, color: "var(--text-primary)", marginBottom: 4 }}>
                  {s7.title}
                </h3>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "var(--text-secondary)", maxWidth: 480 }}>
                  {s7.desc}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(242,202,80,0.4)",
                paddingBottom: 4,
                whiteSpace: "nowrap",
              }}
            >
              Discuss a project →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stv-bento-grid { grid-template-columns: repeat(12, 1fr) !important; }
          .stv-services-header { flex-direction: row !important; justify-content: space-between; align-items: flex-end !important; }
        }
      `}</style>
    </section>
  );
}
