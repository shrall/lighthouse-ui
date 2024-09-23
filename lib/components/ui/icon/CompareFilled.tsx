import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CompareFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 7H6C4.78497 7 3.8 7.98497 3.8 9.2V18C3.8 19.215 4.78497 20.2 6 20.2H18C19.215 20.2 20.2 19.215 20.2 18V9.2C20.2 7.98497 19.215 7 18 7ZM6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM14.8 13V10.8H16.2V13H14.8ZM13 10C13 9.44772 13.4477 9 14 9H17C17.5523 9 18 9.44772 18 10V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V10ZM7.8 10.8V14H9.2V10.8H7.8ZM7 9C6.44772 9 6 9.44772 6 10V17C6 17.5523 6.44772 18 7 18H10C10.5523 18 11 17.5523 11 17V10C11 9.44772 10.5523 9 10 9H7Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
