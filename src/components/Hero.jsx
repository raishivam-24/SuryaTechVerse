import React from "react";
import { hero } from "../data.js";

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Slow-drifting gold/indigo gradient mesh — pure CSS, no network
            image dependency, so the hero always renders instantly and
            never shows a broken/blank background. */}
        <div
          style={{
            position: "absolute",
            inset: "-10%",
            background:
              "radial-gradient(ellipse 60% 50% at 25% 25%, rgba(242,202,80,0.16), transparent 60%)," +
              "radial-gradient(ellipse 55% 55% at 78% 30%, rgba(106,46,224,0.22), transparent 60%)," +
              "radial-gradient(ellipse 60% 60% at 50% 85%, rgba(242,202,80,0.08), transparent 65%)",
            animation: "stv-hero-drift 18s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <div
          className="stv-hero-orb"
          style={{
            position: "absolute",
            top: "18%",
            left: "12%",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,202,80,0.14), transparent 70%)",
            filter: "blur(10px)",
            animation: "stv-float 9s ease-in-out infinite",
          }}
        />
        <div
          className="stv-hero-orb"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,46,224,0.18), transparent 70%)",
            filter: "blur(10px)",
            animation: "stv-float 11s ease-in-out 1.5s infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(19,19,19,0.6), var(--bg))",
            zIndex: 1,
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 20,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 860,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--gold)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
            opacity: 0,
            animation: "fadeInUp 1s ease-out forwards",
          }}
        >
          {hero.eyebrow}
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(38px, 7vw, 72px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: 28,
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.3s forwards",
          }}
        >
          {hero.headline.split("&")[0]}
          <br />
          <span style={{ fontStyle: "italic", color: "var(--gold)" }}>&amp;</span>
          {hero.headline.split("&")[1]}
        </h1>
        <p
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: 640,
            marginBottom: 20,
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.5s forwards",
          }}
        >
          {hero.tagline}
        </p>
        <p
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            opacity: 0.85,
            maxWidth: 600,
            marginBottom: 48,
            animationName: "fadeInUp",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationDelay: "0.6s",
            animationFillMode: "forwards",
          }}
        >
          {hero.description}
        </p>
        <a
          href={hero.primaryCta.href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--text-secondary)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(242,202,80,0.3)",
            paddingBottom: 4,
            opacity: 0,
            animation: "fadeIn 1s ease-out 1s forwards",
          }}
        >
          <span
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {hero.primaryCta.label}
          </span>
          <span style={{ fontSize: 18 }}>↓</span>
        </a>
      </div>
    </header>
  );
}
