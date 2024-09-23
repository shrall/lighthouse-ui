import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const HistoryFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 5C4.5 3.34315 5.84315 2 7.5 2H16.5C18.1569 2 19.5 3.34315 19.5 5V19C19.5 20.6569 18.1569 22 16.5 22H7.5C5.84315 22 4.5 20.6569 4.5 19V5ZM7.5 17C7.5 16.4477 7.94772 16 8.5 16H15.5C16.0523 16 16.5 16.4477 16.5 17C16.5 17.5523 16.0523 18 15.5 18H8.5C7.94772 18 7.5 17.5523 7.5 17ZM8.5 12C7.94772 12 7.5 12.4477 7.5 13C7.5 13.5523 7.94772 14 8.5 14H15.5C16.0523 14 16.5 13.5523 16.5 13C16.5 12.4477 16.0523 12 15.5 12H8.5ZM12 8V6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V9C10 9.55228 10.4477 10 11 10H14C14.5523 10 15 9.55228 15 9C15 8.44772 14.5523 8 14 8H12Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
