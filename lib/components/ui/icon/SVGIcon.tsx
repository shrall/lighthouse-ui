import { cn } from "@/lib/utils";
import * as React from "react";

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "viewBox" | "width" | "height"> {
  size?: number;
}

export const SVGIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        className={cn(className)}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      />
    );
  },
);
