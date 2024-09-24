import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const FlagOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.75C20.0403 3 20.3045 3.16753 20.4283 3.43009C20.5522 3.69265 20.5134 4.0031 20.3287 4.22709L16.1766 9.26351L20.3287 14.2999C20.5134 14.5239 20.5522 14.8344 20.4283 15.0969C20.3045 15.3595 20.0403 15.527 19.75 15.527H5.5V20.75C5.5 21.1642 5.16421 21.5 4.75 21.5C4.33579 21.5 4 21.1642 4 20.75V3.75ZM5.5 14.027H18.1597L14.6259 9.7406C14.3974 9.46355 14.3974 9.06348 14.6259 8.78643L18.1597 4.5H5.5V14.027Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
