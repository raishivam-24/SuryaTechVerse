export default function Field({ label, placeholder, type = "text", ...rest }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-2 text-ink">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-sm px-4 py-3 text-sm bg-transparent border border-line text-ink focus:border-bronze transition-colors"
        {...rest}
      />
    </div>
  );
}
