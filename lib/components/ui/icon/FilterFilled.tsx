import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const FilterFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M2.56066 9.56066C1.61571 8.61571 2.28496 7 3.62132 7H20.3787C21.715 7 22.3843 8.61571 21.4393 9.56066L15 16V18.4648C15 18.7992 14.8329 19.1114 14.5547 19.2969L10.5547 21.9635C9.89014 22.4066 9 21.9302 9 21.1315V16L2.56066 9.56066Z"
          fill="currentColor"
        />
        <rect x="2" y="2" width="20" height="3" rx="1.5" fill="currentColor" />
      </SVGIcon>
    );
  },
);
