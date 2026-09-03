import React from "react";

const FEATURED_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs2SGqjZPrAGUj8cYt1lXBOlCJd2TVcwzxf6y-rWLmc5nqTeOktGxytkx8pU6xt8RP6ayYaOR-XzVObeHGSb8A2i0rEh9xzUpXQV2r-aFdfbGIEljY7JQ7y4IlFoQXupwiD1xpOKkI2gP7WNeN16iE0AHCpKbnCTlpAxc5VhWmQcaW2kd1pMIg-LsYB_nwlotrFh6DywlDqakcpkWmsHpnqaE3tJQ5QWznjKjy7lC2x9b6DCq5iO-C";

/**
 * Single project card. Purely presentational — all position/scale/opacity
 * transform math lives in ProjectCarousel and is passed down via `style`.
 */
const ProjectCard = React.forwardRef(function ProjectCard(
  { project, index, isActive, hasPhoto, style, onSelect, transitionMs },
  ref
) {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      aria-label={`${project.name}, project ${index + 1}`}
      aria-hidden={!isActive}
      onClick={!isActive ? onSelect : undefined}
      className="stv-carousel-card"
      style={{
        ...style,
        transitionDuration: `${transitionMs}ms`,
        cursor: isActive ? "default" : "pointer",
      }}
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
        {hasPhoto ? (
          <img
            src={FEATURED_IMAGE}
            alt=""
            draggable={false}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              userSelect: "none",
            }}
          />
        ) : (
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
          <a
            href="#contact"
            tabIndex={isActive ? 0 : -1}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-block",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(242,202,80,0.4)",
              paddingBottom: 3,
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
              transition: `opacity ${transitionMs}ms ease`,
            }}
          >
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;