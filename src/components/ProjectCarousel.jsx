import React, { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

const AUTOPLAY_MS = 2000;
const TRANSITION_MS = 1000;
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
const SWIPE_THRESHOLD = 50;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);
  return reduced;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

// Shortest signed circular distance from `active` to `index`, within a ring of `n`.
function circularOffset(index, active, n) {
  let diff = index - active;
  const half = n / 2;
  if (diff > half) diff -= n;
  if (diff < -half) diff += n;
  return diff;
}

export default function ProjectCarousel({ projects }) {
  const n = projects.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, deltaX: 0, pointerId: null });
  const liveRegionRef = useRef(null);

  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const transitionMs = reducedMotion ? 150 : TRANSITION_MS;

  const goTo = useCallback(
    (index) => {
      setActive(((index % n) + n) % n);
    },
    [n]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay: wait -> slide -> settle -> wait...
  // Depends on `active` too so that any manual navigation (buttons, dots,
  // swipe, keyboard) restarts the wait window — manual and auto navigation
  // share one single timer instead of racing each other.
  useEffect(() => {
    if (paused || dragging || n <= 1) return undefined;
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % n);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [paused, dragging, n, active]);

  // Announce active project to screen readers.
  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `${projects[active].name}, project ${active + 1} of ${n}`;
    }
  }, [active, projects, n]);

  // Failsafe: if the pointer is released outside the carousel (e.g. the user
  // drags off-window), make sure we don't get stuck in a "dragging" state,
  // which would otherwise pause autoplay forever.
  useEffect(() => {
    if (!dragging) return undefined;
    const reset = () => handlePointerUp();
    window.addEventListener("pointerup", reset);
    window.addEventListener("pointercancel", reset);
    return () => {
      window.removeEventListener("pointerup", reset);
      window.removeEventListener("pointercancel", reset);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  }

  function handlePointerDown(e) {
    if (e.target.closest && (e.target.closest("button") || e.target.closest("a"))) return;
    setDragging(true);
    dragState.current = { startX: e.clientX, deltaX: 0, pointerId: e.pointerId };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }
  function handlePointerMove(e) {
    if (!dragging) return;
    dragState.current.deltaX = e.clientX - dragState.current.startX;
  }
  function handlePointerUp() {
    if (!dragging) return;
    const { deltaX } = dragState.current;
    if (deltaX > SWIPE_THRESHOLD) prev();
    else if (deltaX < -SWIPE_THRESHOLD) next();
    dragState.current = { startX: 0, deltaX: 0, pointerId: null };
    setDragging(false);
  }

  // Desktop cards roughly match the 1200x900 (4:3) screenshots. Mobile cards
  // are intentionally a tall 9:16 "story" format — a more distinctive,
  // app-like showcase than a plain landscape thumbnail on small screens.
  const ACTIVE_W = isMobile ? "68vw" : "min(64vw, 820px)";
  const ACTIVE_H = isMobile ? "calc(68vw * 16 / 9)" : "58vh";
  const SIDE_W = isMobile ? "26vw" : "min(30vw, 380px)";
  const SIDE_H = isMobile ? "calc(26vw * 16 / 9)" : ACTIVE_H;
  const STEP = isMobile ? 46 : 34; // vw offset per step

  function cardStyle(offset) {
    const abs = Math.abs(offset);
    const visible = abs <= 1;
    const scale = offset === 0 ? 1 : abs === 1 ? (isMobile ? 0.88 : 0.82) : 0.7;
    const opacity = offset === 0 ? 1 : abs === 1 ? (isMobile ? 0.5 : 0.55) : 0;
    const width = offset === 0 ? ACTIVE_W : SIDE_W;
    const height = offset === 0 ? ACTIVE_H : SIDE_H;
    const translateX = `${offset * STEP}vw`;
    const dragOffsetPx = dragging ? dragState.current.deltaX * 0.6 : 0;

    return {
      width,
      height,
      transform: `translate(-50%, -50%) translateX(calc(${translateX} + ${dragOffsetPx}px)) scale(${scale})`,
      opacity,
      zIndex: offset === 0 ? 30 : 20 - abs,
      pointerEvents: visible ? "auto" : "none",
      transitionProperty: dragging ? "none" : "transform, opacity",
      transitionTimingFunction: EASING,
    };
  }

  return (
    <div>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`${projects[active].name} project showcase`}
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={handleKeyDown}
        className="stv-carousel-viewport"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          height: isMobile ? "calc(68vw * 16 / 9 + 40px)" : "calc(58vh + 40px)",
          outline: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {projects.map((p, i) => {
          const offset = circularOffset(i, active, n);
          const isActive = offset === 0;
          return (
            <ProjectCard
              key={p.name}
              project={p}
              index={i}
              isActive={isActive}
              priority={isActive}
              transitionMs={transitionMs}
              onSelect={() => goTo(i)}
              style={cardStyle(offset)}
            />
          );
        })}

        <button
          type="button"
          onClick={(e) => {
            prev();
            e.currentTarget.blur();
          }}
          aria-label="Previous project"
          className="glass-panel"
          style={navButtonStyle("left")}
        >
          ←
        </button>
        <button
          type="button"
          onClick={(e) => {
            next();
            e.currentTarget.blur();
          }}
          aria-label="Next project"
          className="glass-panel"
          style={navButtonStyle("right")}
        >
          →
        </button>
      </div>

      {/* Numbered, editorial-style pagination with an autoplay progress sweep —
          a more "classic" indicator than plain dots. */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginTop: 32 }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={(e) => {
                goTo(i);
                e.currentTarget.blur();
              }}
              aria-label={`Go to ${p.name}`}
              aria-current={i === active}
              style={{
                position: "relative",
                width: i === active ? 30 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                background: i === active ? "rgba(242,202,80,0.25)" : "rgba(255,255,255,0.18)",
                transition: `width ${transitionMs}ms ${EASING}, background 300ms ease`,
              }}
            >
              {i === active && !reducedMotion && (
                <span
                  key={active}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 999,
                    background: "var(--gold)",
                    transformOrigin: "left center",
                    animation: `stv-dot-fill ${AUTOPLAY_MS}ms linear forwards`,
                    animationPlayState: paused || dragging ? "paused" : "running",
                  }}
                />
              )}
              {i === active && (reducedMotion || dragging) && (
                <span style={{ position: "absolute", inset: 0, borderRadius: 999, background: "var(--gold)" }} />
              )}
            </button>
          ))}
        </div>
        <span
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
          }}
        >
          {String(active + 1).padStart(2, "0")} <span style={{ opacity: 0.5 }}>/</span> {String(n).padStart(2, "0")}
        </span>
      </div>

      <span
        ref={liveRegionRef}
        aria-live="polite"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      />
    </div>
  );
}

function navButtonStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: "clamp(8px, 3vw, 32px)",
    transform: "translateY(-50%)",
    zIndex: 40,
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "1px solid var(--border-strong)",
    color: "var(--gold)",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };
}