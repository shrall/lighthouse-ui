import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const AddOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 8V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 12L8 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </SVGIcon>
    );
  },
);
