import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const BuyFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.125 6.8V8H7L12 14L17 8H13.875C13.875 4.6862 11.0769 2 7.625 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2H7.61853C7.45174 2.00008 7.28502 2.00649 7.11875 2.0192C8.02615 2.47736 8.78584 3.16491 9.31569 4.00752C9.84554 4.85014 10.1254 5.81576 10.125 6.8Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
