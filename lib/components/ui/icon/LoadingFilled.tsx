import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const LoadingFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <circle opacity="0.9" cx="10" cy="5" r="3" fill="currentColor" />
        <circle opacity="0.8" cx="4.5" cy="10.5" r="2.5" fill="currentColor" />
        <circle
          opacity="0.6"
          cx="6.7002"
          cy="17.5"
          r="2.5"
          fill="currentColor"
        />
        <circle opacity="0.4" cx="13" cy="20" r="2" fill="currentColor" />
        <circle
          opacity="0.2"
          cx="18.2998"
          cy="17.5"
          r="2"
          fill="currentColor"
        />
        <circle
          opacity="0.1"
          cx="20.5"
          cy="12.7998"
          r="1.5"
          fill="currentColor"
        />
        <circle
          opacity="0.05"
          cx="19.7998"
          cy="8.2002"
          r="1"
          fill="currentColor"
        />
        <circle opacity="0.02" cx="17.5" cy="5.5" r="0.5" fill="currentColor" />
      </SVGIcon>
    );
  },
);
