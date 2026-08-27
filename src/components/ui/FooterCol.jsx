export default function FooterCol({ title, links }) {
  return (
    <div>
      <h5 className="text-xs uppercase tracking-widest font-semibold mb-4 text-line/50">{title}</h5>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-line/80 hover:text-bronze">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
