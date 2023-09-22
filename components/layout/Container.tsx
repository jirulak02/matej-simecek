export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto px-5 min-[1180px]:max-w-[1180px] ${className}`}>
      {children}
    </div>
  );
}
