import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const EnvelopeOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="2.9"
          y="3.9"
          width="18.2"
          height="16.2"
          rx="2.1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M21 5L12.606 11.3954C12.248 11.6682 11.752 11.6682 11.394 11.3954L3 5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </SVGIcon>
    );
  },
);
