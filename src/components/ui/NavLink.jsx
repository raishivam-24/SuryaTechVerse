export default function NavLink({ children, active = false, href = "#" }) {
  return (
    <a
      href={href}
      className={`text-[12.5px] tracking-[0.1em] uppercase font-medium pb-1 whitespace-nowrap border-b-2 ${
        active ? "text-ink border-bronze" : "text-slate border-transparent"
      }`}
    >
      {children}
    </a>
  );
}
