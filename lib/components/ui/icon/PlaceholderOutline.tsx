import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const PlaceholderOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9272 4.8H6.07279L12 10.7272L17.9272 4.8ZM19.2 6.07279L13.2728 12L19.2 17.9272V6.07279ZM10.7272 12L4.8 6.07279V17.9272L10.7272 12ZM6.07279 19.2L12 13.2728L17.9272 19.2H6.07279ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
