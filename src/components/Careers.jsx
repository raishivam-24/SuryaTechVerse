import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { CAREERS } from "../data/content.js";

export default function Careers() {
  return (
    <section
      id="careers"
      className="px-5 md:px-10 py-20 md:py-28 bg-paper border-y border-line"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Eyebrow>Join Us</Eyebrow>
            <Rule />
            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-ink">
              Open Positions
            </h2>
          </div>
          <p className="max-w-md text-slate">
            We hire slowly and keep teams small. If nothing below fits, send
            your resume anyway.
          </p>
        </div>
        <div className="space-y-4">
          {CAREERS.map((c) => (
            <div
              key={c.role}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-lg p-6 bg-cream border border-line"
            >
              <div>
                <h4 className="font-semibold text-ink">{c.role}</h4>
                <p className="text-xs uppercase tracking-wide mt-1 text-slate">{c.type}</p>
              </div>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-sm text-xs font-medium tracking-wide uppercase text-center bg-ink text-bronze hover:bg-ink-deep transition-colors"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
