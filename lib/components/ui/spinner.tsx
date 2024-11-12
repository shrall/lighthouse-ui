import { forwardRef, ForwardedRef, HTMLAttributes } from "react";
import { LoadingFilled } from "./icon/LoadingFilled";
import { cn } from "@/lib/utils";

interface SpinnerProps extends HTMLAttributes<SVGSVGElement> {
  size?: "small" | "medium" | "large";
}

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  (
    { className, size = "small", ...props }: SpinnerProps,
    ref: ForwardedRef<SVGSVGElement>,
  ) => {
    return (
      <LoadingFilled
        ref={ref}
        className={cn(
          "lui-animate-spin lui-text-ocean-secondary-30",
          {
            "lui-size-6": size === "small",
            "lui-size-8": size === "medium",
            "lui-size-10": size === "large",
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
