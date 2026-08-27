import { CLIENTS } from "../data/content.js";

export default function TrustedBy() {
  return (
    <section className="py-10 border-y border-line bg-paper">
      <p className="text-center text-xs uppercase tracking-[0.2em] mb-6 text-slate">
        Trusted by teams at
      </p>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-4 px-5">
        {CLIENTS.map((c) => (
          <span key={c} className="font-headline font-semibold text-lg tracking-wide text-slate/75">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
