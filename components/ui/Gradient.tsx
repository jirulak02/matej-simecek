export default function Gradient({ className }: { className: string }) {
  return (
    <div
      className={`from-primary-dark to-primary-light absolute inset-0 bg-gradient-to-r ${className}`}
    />
  );
}
