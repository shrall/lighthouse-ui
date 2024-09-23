import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ChevronDownOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M18 9L12 15L6 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
