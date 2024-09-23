import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const SortOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M16.5 4.5L16.5 18M16.5 4.5L21 9M16.5 4.5L12 9"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 19.5L7.5 6M7.5 19.5L3 15M7.5 19.5L12 15"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
