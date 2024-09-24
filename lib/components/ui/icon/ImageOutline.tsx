import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ImageOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="2.9"
          y="4.9"
          width="18.2"
          height="14.2"
          rx="2.1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 17.5L8.89868 10.6938C9.23876 10.3014 9.82259 10.2346 10.2425 10.54L20.5 18M21 13.75L17.758 11.5211C17.3295 11.2265 16.7468 11.3095 16.4175 11.7119L14.75 13.75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="14.5"
          cy="8.5"
          r="0.9"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </SVGIcon>
    );
  },
);
