export default function CTA() {
  return (
    <section className="px-5 md:px-10 py-16 bg-ink">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h3 className="font-headline font-semibold text-2xl md:text-3xl text-cream">
          Have a project worth doing properly?
        </h3>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-sm text-sm font-medium tracking-wide shrink-0 bg-bronze text-ink-deep hover:bg-bronze-deep transition-colors"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
