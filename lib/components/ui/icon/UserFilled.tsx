import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const UserFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2ZM11.5 11C7.08172 11 3.5 14.5817 3.5 19C3.5 20.1046 4.39543 21 5.5 21H18.5C19.6046 21 20.5 20.1046 20.5 19C20.5 14.5817 16.9183 11 12.5 11H11.5Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
