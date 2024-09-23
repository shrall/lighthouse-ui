import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ClockFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0039 5C12.5562 5 13.0039 5.44772 13.0039 6V11.5445L16.1506 14.2406C16.57 14.6 16.6187 15.2313 16.2594 15.6506C15.9 16.07 15.2687 16.1187 14.8494 15.7594L11.3533 12.7639C11.1315 12.5739 11.0039 12.2965 11.0039 12.0045V6C11.0039 5.44772 11.4516 5 12.0039 5Z"
          fill="white"
        />
      </SVGIcon>
    );
  },
);
