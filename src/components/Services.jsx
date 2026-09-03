import React from "react";
import { services } from "../data.js";

function ServiceCard({ service, index, spanClass = "", minHeight = 260 }) {
  return (
    <a
      href="#contact"
      className={`service-card glass-panel ${spanClass}`}
      aria-label={`${service.title} — get in touch about this service`}
      style={{
        borderRadius: 20,
        padding: "clamp(22px, 3vw, 32px)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--border)",
        display: "block",
        textDecoration: "none",
      }}
    >
      {/* ambient glow, brightens on hover via .service-card:hover in index.css */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,202,80,0.16), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          minHeight,
          gap: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span
            className="service-icon"
            style={{
              width: "clamp(48px, 5vw, 60px)",
              height: "clamp(48px, 5vw, 60px)",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(22px, 2.4vw, 28px)",
              lineHeight: 1,
              background: "linear-gradient(155deg, rgba(242,202,80,0.16), rgba(106,46,224,0.12))",
              border: "1px solid rgba(242,202,80,0.25)",
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
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(19px, 2vw, 24px)",
              letterSpacing: "0.01em",
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              lineHeight: 1.55,
              color: "var(--text-secondary)",
              marginBottom: 16,
            }}
          >
            {service.desc}
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
    </a>
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

        {/* Mobile & tablet: clean, uniform 1/2-column grid — every card gets equal
            visual weight, which reads far better than a squeezed bento layout
            on narrow screens. */}
        <div className="stv-services-simple">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} minHeight={220} />
          ))}
        </div>

        {/* Desktop (>=1024px): the original asymmetric bento showcase. */}
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

          <a
            href="#contact"
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
              textDecoration: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  background: "linear-gradient(155deg, rgba(242,202,80,0.16), rgba(106,46,224,0.12))",
                  border: "1px solid rgba(242,202,80,0.25)",
                  flexShrink: 0,
                }}
              >
                {services[7].icon}
              </span>
              <div>
                <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, fontSize: 24, color: "var(--text-primary)", marginBottom: 4 }}>
                  {services[7].title}
                </h3>
                <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: "var(--text-secondary)", maxWidth: 480 }}>
                  {services[7].desc}
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
          </a>
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