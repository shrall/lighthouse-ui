import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const LogoutOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M15 6.5V5.5C15 4.11929 13.8807 3 12.5 3H5.5C4.11929 3 3 4.11929 3 5.5V18.5C3 19.8807 4.11929 21 5.5 21H12.5C13.8807 21 15 19.8807 15 18.5V17.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9 12H21M21 12L18 15M21 12L18 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
