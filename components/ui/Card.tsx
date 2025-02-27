export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xs bg-white p-3 shadow-md drop-shadow-sm md:p-5 ${className}`}>
      {children}
    </div>
  );
}
