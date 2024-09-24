import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ListOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
        <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
        <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
      </SVGIcon>
    );
  },
);
