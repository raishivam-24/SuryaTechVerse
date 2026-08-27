import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { REVIEWS } from "../data/content.js";

export default function Reviews() {
  return (
    <section id="reviews" className="px-5 md:px-10 py-20 md:py-28 bg-ink-deep">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center max-w-xl mx-auto">
          <Eyebrow light>Client Reviews</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl mx-auto text-cream">
            What clients say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-lg p-7 bg-bronze/[0.06] border border-bronze/25"
            >
              <div className="flex gap-1 mb-4" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-bronze">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-cream">"{r.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-paper">{r.name}</p>
                <p className="text-xs text-slate">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
