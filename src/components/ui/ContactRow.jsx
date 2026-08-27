export default function ContactRow({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-mono text-sm bg-cream text-ink border border-line">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wide text-ink">{label}</h4>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="text-sm text-ink hover:text-bronze-deep">
            {value}
          </a>
        ) : (
          <p className="text-sm text-slate">{value}</p>
        )}
      </div>
    </div>
  );
}
