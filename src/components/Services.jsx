import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { SERVICES } from "../data/content.js";

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Eyebrow>What We Do</Eyebrow>
            <Rule />
            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-ink">
              Our Expertise
            </h2>
          </div>
          <p className="max-w-md text-slate">
            Six disciplines, one accountable team — engineered for scale,
            security, and measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.n} className="h-full p-7 rounded-lg hover-lift bg-paper border border-line">
              <span className="font-mono text-xs text-bronze">{s.n}</span>
              <h3 className="font-headline font-semibold text-xl mt-2 mb-3 text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed mb-6 text-slate">{s.body}</p>
              <ul className="space-y-2">
                {s.tags.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-ink">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-bronze" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
