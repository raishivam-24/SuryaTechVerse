import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { PROCESS } from "../data/content.js";

export default function Approach() {
  return (
    <section id="approach" className="px-5 md:px-10 py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <Eyebrow light>How We Work</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl">
            A repeatable process, not a one-off sprint
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream/10">
          {PROCESS.map((p) => (
            <div key={p.n} className="p-8 bg-ink">
              <span className="font-mono text-sm text-bronze">{p.n}</span>
              <h3 className="font-headline font-semibold text-xl mt-3 mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed text-cream/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
