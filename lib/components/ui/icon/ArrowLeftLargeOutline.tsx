import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ArrowLeftLargeOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M4.75024 11.7256L19.7502 11.7256"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8 5.70124L4.75005 11.7252L10.8 17.7502"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
