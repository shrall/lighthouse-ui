import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const PhoneFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3.8H17C17.1105 3.8 17.2 3.88954 17.2 4V17.8C17.2 17.9105 17.1105 18 17 18H7C6.88954 18 6.8 17.9105 6.8 17.8L6.8 4C6.8 3.88954 6.88954 3.8 7 3.8ZM5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
