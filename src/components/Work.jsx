import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { WORK } from "../data/content.js";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Eyebrow>Case Studies</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl text-ink">
            Project Showcase
          </h2>
        </div>
        <p className="max-w-sm text-slate">
          A selection of recent engagements, with the outcome that mattered
          most to the client.
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-cream to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-cream to-transparent" />
        <div className="flex gap-6 auto-scroll w-max">
          {[...WORK, ...WORK].map((w, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 rounded-lg p-8 flex flex-col justify-between h-60 bg-ink text-cream"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-bronze">
                  {String((i % WORK.length) + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-wide text-cream/55">{w.tag}</span>
              </div>
              <div>
                <h4 className="font-headline font-semibold text-xl mb-2">{w.name}</h4>
                <p className="text-sm mb-4 text-cream/75">{w.desc}</p>
                <p className="text-xs font-medium text-bronze">{w.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
