import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CardOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="2.9"
          y="5.9"
          width="18.2"
          height="13.2"
          rx="2.1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 10H20.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15H11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
