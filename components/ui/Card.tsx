export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`bg-white shadow-lg p-5 ${className}`}>{children}</div>;
}
