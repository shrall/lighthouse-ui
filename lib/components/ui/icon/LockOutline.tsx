import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const LockOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 4H13C14.1046 4 15 4.89543 15 6V8H9V6C9 4.89543 9.89543 4 11 4ZM7 8V6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6V8C19.2091 8 21 9.79086 21 12V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V12C3 9.79086 4.79086 8 7 8ZM17 10H15H9H7C5.89543 10 5 10.8954 5 12V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V12C19 10.8954 18.1046 10 17 10ZM13 14.6181C13.3069 14.3434 13.5 13.9443 13.5 13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5C10.5 13.9443 10.6931 14.3434 11 14.6181V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V14.6181Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
