import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const UserDashedFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6ZM3.5 19C3.5 14.5817 7.08172 11 11.5 11H12.5C16.9183 11 20.5 14.5817 20.5 19C20.5 20.1046 19.6046 21 18.5 21H5.5C4.39543 21 3.5 20.1046 3.5 19ZM10.5 14C9.94772 14 9.5 14.4477 9.5 15C9.5 15.5523 9.94772 16 10.5 16H13.5C14.0523 16 14.5 15.5523 14.5 15C14.5 14.4477 14.0523 14 13.5 14H10.5Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
