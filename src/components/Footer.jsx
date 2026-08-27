import FooterCol from "./ui/FooterCol.jsx";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-line">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <span className="font-headline font-semibold text-xl text-paper">SuryaTechVerse</span>
          <p className="text-sm mt-3 max-w-xs leading-relaxed text-line/65">
            Web, security, mobile, and marketing consulting — engineered by
            one accountable team.
          </p>
          <form
            className="mt-6 flex gap-3 max-w-xs"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Your email"
              className="flex-1 rounded-sm px-3 py-2.5 text-sm bg-transparent border border-line/30 text-paper placeholder:text-line/40"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-sm text-xs font-medium uppercase tracking-wide shrink-0 bg-bronze text-ink-deep hover:bg-bronze-deep transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        <FooterCol title="Company" links={["About", "Approach", "Team", "Careers"]} />
        <FooterCol
          title="Services"
          links={["Web Development", "Cybersecurity", "Mobile Apps", "Digital Marketing"]}
        />
        <FooterCol title="Resources" links={["Case Studies", "Reviews", "FAQ", "Contact"]} />
      </div>
      <div className="border-t border-line/15">
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-line/55">
            © 2026 SuryaTechVerse. Excellence in digital innovation.
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-xs underline text-line/55"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
