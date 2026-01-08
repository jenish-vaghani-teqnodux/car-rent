export default function LineSkeleton({
  className,
  variant = "primary",
}: ILineSkeletonProps) {
  const bgColor = variant === "primary" ? "bg-[#85A8F8]" : "bg-[#EFF3FD]";

  return (
    <div
      className={`animate-pulse rounded-lg h-4 w-[116px] ${bgColor} ${className}`}
    />
  );
}
