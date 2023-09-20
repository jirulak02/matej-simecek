export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-sm bg-white p-5 shadow-md drop-shadow ${className}`}>{children}</div>
  );
}
