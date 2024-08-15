import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "lui-animate-pulse lui-rounded-2xl lui-bg-gradient-to-r lui-from-ocean-primary-20/10 lui-to-ocean-primary-20/5",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
