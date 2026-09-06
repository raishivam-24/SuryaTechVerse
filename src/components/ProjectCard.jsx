import React, { useState } from "react";

/**
 * Single project card. Purely presentational (besides its own image
 * load/error state) — all position/scale/opacity transform math lives in
 * ProjectCarousel and is passed down via `style`.
 *
 * Behavior:
 * - Active card: it IS a real <a target="_blank"> to the live project URL.
 *   Using a genuine anchor (instead of window.open() in a click handler)
 *   means the browser treats it as a normal link click — it can never be
 *   silently swallowed by a popup blocker.
 * - Non-active (side) card: a plain clickable <div> that just brings it to
 *   center (onSelect) — it does NOT navigate anywhere.
 */
const ProjectCard = React.forwardRef(function ProjectCard(
  { project, index, isActive, style, onSelect, transitionMs, priority },
  ref
) {
  const [imgFailed, setImgFailed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const Wrapper = isActive ? "a" : "div";
  const wrapperProps = isActive
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        onClick: onSelect,
      };

  return (
    <Wrapper
      ref={ref}
      role="group"
      aria-roledescription="slide"
      aria-label={
        isActive
          ? `${project.name}, project ${index + 1} — opens the live website in a new tab`
          : `${project.name}, project ${index + 1}`
      }
      aria-hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
      className="stv-carousel-card"
      style={{
        ...style,
        transitionDuration: `${transitionMs}ms`,
        cursor: "pointer",
        textDecoration: "none",
        display: "block",
      }}
      {...wrapperProps}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "linear-gradient(150deg, #201f1f, #0e0e0e)",
          boxShadow: isActive ? "0 30px 80px rgba(0,0,0,0.55)" : "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        {isActive && (
          <>
            {[
              { top: 14, left: 14, borderTop: "1.5px solid var(--gold)", borderLeft: "1.5px solid var(--gold)" },
              { top: 14, right: 14, borderTop: "1.5px solid var(--gold)", borderRight: "1.5px solid var(--gold)" },
              { bottom: 14, left: 14, borderBottom: "1.5px solid var(--gold)", borderLeft: "1.5px solid var(--gold)" },
              { bottom: 14, right: 14, borderBottom: "1.5px solid var(--gold)", borderRight: "1.5px solid var(--gold)" },
            ].map((pos, idx) => (
              <span
                key={idx}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: 22,
                  height: 22,
                  zIndex: 20,
                  opacity: 0.85,
                  pointerEvents: "none",
                  ...pos,
                }}
              />
            ))}
          </>
        )}
        {project.image && !imgFailed ? (
          <img
            src={project.image}
            alt={`${project.name} — live website screenshot`}
            draggable={false}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              userSelect: "none",
              opacity: imgLoaded ? 1 : 0,
              transition: "opacity 500ms ease",
            }}
          />
        ) : null}

        {(!project.image || imgFailed || !imgLoaded) && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 30% 20%, rgba(242,202,80,0.14), transparent 60%)",
              }}
            />
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: "min(20vw, 120px)",
                color: "rgba(242,202,80,0.35)",
                fontStyle: "italic",
                userSelect: "none",
              }}
            >
              {project.name.charAt(0)}
            </span>
          </>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 45%, transparent 70%)",
          }}
        />

        {isActive && (
          <span
            style={{
              position: "absolute",
              top: "clamp(14px, 2vw, 24px)",
              right: "clamp(14px, 2vw, 24px)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(10,10,10,0.55)",
              border: "1px solid rgba(242,202,80,0.35)",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold)",
              opacity: isActive ? 1 : 0,
              transition: `opacity ${transitionMs}ms ease`,
            }}
          >
            Visit Live Site ↗
          </span>
        )}

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "clamp(20px, 4vw, 44px)",
          }}
        >
          {project.sector && (
            <span
              style={{
                display: "inline-block",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 8,
                opacity: isActive ? 1 : 0,
                transition: `opacity ${transitionMs}ms ease`,
              }}
            >
              {project.sector}
            </span>
          )}
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(20px, 2.6vw, 34px)",
              color: "var(--text-primary)",
              margin: "0 0 8px",
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              lineHeight: 1.5,
              color: "var(--text-secondary)",
              margin: "0 0 16px",
              maxWidth: 440,
              opacity: isActive ? 1 : 0,
              transition: `opacity ${transitionMs}ms ease`,
            }}
          >
            {project.desc}
          </p>
          {/* Decorative only — the whole card is already the real link when
              active, so this isn't a second/nested anchor. */}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              borderBottom: "1px solid rgba(242,202,80,0.4)",
              paddingBottom: 3,
              opacity: isActive ? 1 : 0,
              transition: `opacity ${transitionMs}ms ease`,
            }}
          >
            View Case Study
          </span>
        </div>
      </div>
    </Wrapper>
  );
});

export default ProjectCard;