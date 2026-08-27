import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { FOUNDER } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>Our Vision</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl text-ink">
            Pioneering the digital frontier
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div className="h-full rounded-lg p-8 md:p-10 flex flex-col justify-center hover-lift bg-paper border border-line">
              <h3 className="font-headline font-semibold text-2xl mb-4 text-ink">
                Engineering, not just delivery
              </h3>
              <p className="leading-relaxed mb-6 text-slate">
                We don't hand off a build and disappear. Every engagement pairs a
                named engineer with a named point of contact, so decisions made
                in week one are still legible in month six.
              </p>
              <div className="flex gap-3 flex-wrap">
                {["Innovation", "Precision", "Accountability"].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-sm text-xs font-medium bg-cream text-ink border border-line"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="h-full rounded-lg p-8 flex flex-col justify-between bg-ink text-cream">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 font-mono text-sm bg-bronze/20 text-bronze">
                  {FOUNDER.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <h4 className="font-headline font-semibold text-lg mb-1">{FOUNDER.name}</h4>
                <p className="text-xs uppercase tracking-widest mb-4 text-bronze">{FOUNDER.title}</p>
                <p className="text-sm leading-relaxed text-line">"{FOUNDER.quote}"</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-12">
            <div className="rounded-lg p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover-lift bg-paper border border-line">
              <span className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-mono shrink-0 bg-cream text-ink border border-line">
                Ed
              </span>
              <div>
                <h4 className="font-headline font-semibold text-lg mb-1 text-ink">
                  Commitment to tech education
                </h4>
                <p className="text-slate">
                  Alongside client work, we run training programs that put practical,
                  high-demand skills into the hands of the next generation of technologists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
