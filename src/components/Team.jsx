import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { TEAM } from "../data/content.js";

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 md:py-28 overflow-hidden bg-paper border-y border-line"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 mb-10 text-center">
        <Eyebrow>Who We Are</Eyebrow>
        <Rule />
        <h2 className="font-headline font-semibold text-3xl md:text-4xl mx-auto text-ink">
          Meet the Experts
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-paper to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-paper to-transparent" />
        <div
          className="flex gap-6 auto-scroll w-max"
          style={{ animationDirection: "reverse" }}
        >
          {[...TEAM, ...TEAM].map((m, i) => (
            <div
              key={i}
              className="w-[220px] shrink-0 rounded-lg p-6 text-center bg-cream border border-line"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-headline font-semibold bg-ink text-bronze">
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <h4 className="font-semibold text-sm mb-1 text-ink">{m.name}</h4>
              <p className="text-xs uppercase tracking-wide text-slate">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
