import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import { INDUSTRIES } from "../data/content.js";

export default function Industries() {
  return (
    <section
      id="industries"
      className="px-5 md:px-10 py-20 bg-paper border-y border-line"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-xl">
          <Eyebrow>Where We Work</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl text-ink">
            Industries we serve
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind}
              className="rounded-lg px-5 py-6 text-sm font-medium bg-cream border border-line text-ink"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
