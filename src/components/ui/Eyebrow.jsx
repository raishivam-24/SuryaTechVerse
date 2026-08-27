export default function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`font-mono text-xs tracking-[0.22em] uppercase ${
        light ? "text-bronze" : "text-bronze-deep"
      }`}
    >
      {children}
    </span>
  );
}
