import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ChevronRightFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM9.293 7.707L10.707 6.293L16.414 12L10.707 17.707L9.293 16.293L13.586 12L9.293 7.707Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
