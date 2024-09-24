import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DownloadSquareOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="2.8"
          y="2.8"
          width="18.4"
          height="18.4"
          rx="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 13.0355V5.96448"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.35148 10.387L12 13.0355L14.6485 10.387"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16L8.86214 16.3724C10.9335 16.7867 13.0665 16.7867 15.1379 16.3724L17 16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </SVGIcon>
    );
  },
);
