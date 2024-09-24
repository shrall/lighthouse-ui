import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const RotateOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="3.9"
          y="7.9"
          width="13.2"
          height="13.2"
          rx="2.1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M15 4H18C19.6569 4 21 5.34315 21 7V10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M13.2728 4L14.1 3.17279V4.82721L13.2728 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </SVGIcon>
    );
  },
);
