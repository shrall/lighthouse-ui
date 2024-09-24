import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DotFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </SVGIcon>
    );
  },
);
