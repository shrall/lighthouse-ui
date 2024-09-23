import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CalendarFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V4ZM6 5C4.34315 5 3 6.34315 3 8V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V8C21 6.34315 19.6569 5 18 5V6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6V5H10V6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6V5ZM6 10C5.44772 10 5 10.4477 5 11V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V11C19 10.4477 18.5523 10 18 10H6ZM8 3C7.44772 3 7 3.44772 7 4V6C7 6.55228 7.44772 7 8 7C8.55228 7 9 6.55228 9 6V4C9 3.44772 8.55228 3 8 3Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
