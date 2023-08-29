export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`bg-white p-5 shadow-md ${className}`}>{children}</div>;
}
