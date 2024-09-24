import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const FlagFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path d="M20 4H5V15.027H20L15.4545 9.51351L20 4Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.25 4C4.25 3.58579 4.58579 3.25 5 3.25H20C20.2903 3.25 20.5545 3.41753 20.6783 3.68009C20.8022 3.94265 20.7634 4.2531 20.5787 4.47709L16.4266 9.51351L20.5787 14.5499C20.7634 14.7739 20.8022 15.0844 20.6783 15.3469C20.5545 15.6095 20.2903 15.777 20 15.777H5.75V21C5.75 21.4142 5.41421 21.75 5 21.75C4.58579 21.75 4.25 21.4142 4.25 21V4ZM5.75 14.277H18.4097L14.8759 9.9906C14.6474 9.71355 14.6474 9.31348 14.8759 9.03643L18.4097 4.75H5.75V14.277Z"
          fill="currentColor"
        />
        <path d="M20 4H5V15.027H20L15.4545 9.51351L20 4Z" fill="currentColor" />
      </SVGIcon>
    );
  },
);
