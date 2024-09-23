import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CalendarOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="2.9"
          y="4.9"
          width="18.2"
          height="16.2"
          rx="2.1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect x="6" y="2" width="2" height="3" rx="1" fill="currentColor" />
        <rect
          x="21"
          y="9"
          width="1.8"
          height="18"
          rx="0.9"
          transform="rotate(90 21 9)"
          fill="currentColor"
        />
        <rect x="16" y="2" width="2" height="3" rx="1" fill="currentColor" />
      </SVGIcon>
    );
  },
);
