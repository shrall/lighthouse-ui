import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CheckFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <defs>
          <mask id="mask-check">
            <rect width="100%" height="100%" fill="white" />
            <path
              d="M8 12.5L11 15.5L16 9.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        </defs>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
          mask="url(#mask-check)"
        />
      </SVGIcon>
    );
  },
);
