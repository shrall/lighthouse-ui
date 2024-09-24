import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ChevronUpFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12ZM7.707 14.707L6.293 13.293L12 7.586L17.707 13.293L16.293 14.707L12 10.414L7.707 14.707Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
