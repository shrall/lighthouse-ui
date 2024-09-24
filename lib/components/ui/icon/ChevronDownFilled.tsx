import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ChevronDownFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12ZM16.293 9.293L17.707 10.707L12 16.414L6.293 10.707L7.707 9.293L12 13.586L16.293 9.293Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
