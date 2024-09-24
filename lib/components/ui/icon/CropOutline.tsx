import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CropOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M6 3V16C6 17.1046 6.89543 18 8 18H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18 21L18 8C18 6.89543 17.1046 6 16 6L3 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </SVGIcon>
    );
  },
);
