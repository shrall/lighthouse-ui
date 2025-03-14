import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ChevronLeftFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM14.707 16.293L13.293 17.707L7.586 12L13.293 6.293L14.707 7.707L10.414 12L14.707 16.293Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
