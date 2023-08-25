export default function Gradient({ className }: { className: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-400 ${className}`} />
  );
}
