import { useState } from "react";
import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { FAQS } from "../data/content.js";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <Eyebrow>Common Questions</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl mx-auto text-ink">
            Frequently asked
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className="rounded-lg overflow-hidden border border-line bg-paper"
              >
                <button
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <span className="font-mono text-lg shrink-0 ml-4 text-bronze">
                    {open ? "–" : "+"}
                  </span>
                </button>
                {open && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
