import React from "react";
import { services } from "../data.js";

function shorten(text, maxWords = 9) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
}

function ServiceCard({ service, index, spanClass = "", minHeight = 260 }) {
  return (
    <div
      className={`service-card glass-panel ${spanClass}`}
      style={{
        borderRadius: 20,
        padding: "clamp(22px, 3vw, 32px)",
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
          gap: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          {/* Icon tile enlarged — carries more visual weight than the old small badge */}
          <span
            className="service-icon"
            style={{
              width: "clamp(72px, 9vw, 96px)",
              height: "clamp(72px, 9vw, 96px)",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(32px, 4vw, 42px)",
              lineHeight: 1,
              background: "linear-gradient(155deg, rgba(242,202,80,0.2), rgba(106,46,224,0.16))",
              border: "1px solid rgba(242,202,80,0.3)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            }}
          >
            {service.icon}
          </span>
          <span
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "4px 10px",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(19px, 2vw, 24px)",
              color: "var(--text-primary)",
              marginBottom: 6,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 14,
              lineHeight: 1.45,
              color: "var(--text-secondary)",
              marginBottom: 14,
            }}
          >
            {shorten(service.desc)}
          </p>
          <span
            className="stv-service-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Get Started
            <span className="stv-service-arrow" style={{ transition: "transform 0.3s ease" }}>
              →
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: "clamp(80px, 14vw, 160px) 0", position: "relative", overflow: "hidden" }}>
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
            gap: 24,
            marginBottom: "clamp(40px, 6vw, 80px)",
          }}
          className="stv-services-header"
        >
          <div>
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
              ( What We Offer )
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "clamp(30px, 4vw, 40px)",
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              Our Services
            </h2>
            <div style={{ height: 1, width: 96, background: "linear-gradient(to right, var(--gold), transparent)" }} />
          </div>
          <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "clamp(14px, 1.6vw, 16px)", color: "var(--text-secondary)", maxWidth: 480 }}>
            Tailored strategies and meticulous execution designed for high-stakes business environments.
          </p>
        </div>

        {/* Mobile & tablet: uniform 1/2-column grid */}
        <div className="stv-services-simple">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} minHeight={220} />
          ))}
        </div>

        {/* Desktop (>=1024px): asymmetric bento showcase */}
        <div className="stv-services-bento">
          <ServiceCard service={services[0]} index={0} spanClass="stv-bento-8" minHeight={300} />
          <ServiceCard service={services[1]} index={1} spanClass="stv-bento-4" minHeight={300} />

          <ServiceCard service={services[2]} index={2} spanClass="stv-bento-4" minHeight={300} />
          <div className="stv-bento-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <ServiceCard service={services[3]} index={3} minHeight={250} />
            <ServiceCard service={services[4]} index={4} minHeight={250} />
          </div>

          <ServiceCard service={services[5]} index={5} spanClass="stv-bento-8" minHeight={280} />
          <ServiceCard service={services[6]} index={6} spanClass="stv-bento-4" minHeight={280} />

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
              <span
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                  background: "linear-gradient(155deg, rgba(242,202,80,0.2), rgba(106,46,224,0.16))",
                  border: "1px solid rgba(242,202,80,0.3)",
                }}
              >
                {services[7].icon}
              </span>
              <div>
                <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, fontSize: 24, color: "var(--text-primary)", marginBottom: 4 }}>
                  {services[7].title}
                </h3>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 14, color: "var(--text-secondary)", maxWidth: 480 }}>
                  {shorten(services[7].desc)}
                </p>
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gold)",
                borderBottom: "1px solid rgba(242,202,80,0.4)",
                paddingBottom: 4,
                whiteSpace: "nowrap",
              }}
            >
              Discuss a project →
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .stv-services-simple {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .stv-services-bento {
          display: none;
        }
        .service-card .stv-service-arrow {
          display: inline-block;
        }
        .service-card:hover .stv-service-arrow {
          transform: translateX(4px);
        }

        @media (min-width: 560px) {
          .stv-services-simple {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (min-width: 768px) {
          .stv-services-header {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-end !important;
          }
        }

        @media (min-width: 1024px) {
          .stv-services-simple {
            display: none;
          }
          .stv-services-bento {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}