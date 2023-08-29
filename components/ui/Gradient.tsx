export default function Gradient({ className }: { className: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-r from-slate-900 to-cyan-600 ${className}`} />
  );
}
