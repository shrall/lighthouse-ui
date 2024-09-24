import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const BellDashedFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C11.4477 2 11 2.44772 11 3V4.07089C7.60771 4.55612 5 7.47353 5 11V15.7895C5 15.8605 5.00335 15.9307 5.00989 16H5C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H7.21053H16.7895H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H18.9901C18.9967 15.9307 19 15.8605 19 15.7895V11C19 7.47353 16.3923 4.55612 13 4.07089V3C13 2.44772 12.5523 2 12 2ZM8.5 20C8.5 19.4477 8.94772 19 9.5 19H14.5C15.0523 19 15.5 19.4477 15.5 20C15.5 20.5523 15.0523 21 14.5 21H9.5C8.94772 21 8.5 20.5523 8.5 20ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H10Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
