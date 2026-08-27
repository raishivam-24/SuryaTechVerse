import Eyebrow from "./ui/Eyebrow.jsx";
import { STATS } from "../data/content.js";

export default function Hero() {
  return (
    <section id="home" className="px-5 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <Eyebrow>Digital Excellence, Applied Since 2017</Eyebrow>
        <h1 className="font-headline font-semibold text-[38px] leading-[1.12] md:text-[64px] md:leading-[1.08] mt-5 mb-6 text-ink">
          Consulting and engineering for businesses staking real outcomes on
          technology.
        </h1>
        <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-slate">
          Web, security, mobile, and marketing work — delivered by one
          accountable team, not a rotating cast of subcontractors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-sm text-sm font-medium tracking-wide text-center bg-ink text-bronze hover:bg-ink-deep transition-colors"
          >
            Book a Consultation
          </a>
          <a
            href="#work"
            className="px-8 py-3.5 rounded-sm text-sm font-medium tracking-wide text-center border border-ink text-ink hover:bg-ink hover:text-bronze transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-line">
        {STATS.map(([num, label]) => (
          <div key={label} className="text-center">
            <span className="block font-headline font-semibold text-3xl md:text-4xl text-ink">
              {num}
            </span>
            <span className="text-xs uppercase tracking-wide text-slate">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
