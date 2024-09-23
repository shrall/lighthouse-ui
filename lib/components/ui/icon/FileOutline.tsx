import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const FileOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M11.2512 7.49923L11.5183 7.9H12H19C20.1598 7.9 21.1 8.8402 21.1 10V18C21.1 19.1598 20.1598 20.1 19 20.1H5C3.8402 20.1 2.9 19.1598 2.9 18V7C2.9 5.8402 3.8402 4.9 5 4.9H8.92963C9.29742 4.9 9.64088 5.08381 9.84489 5.38983L11.2512 7.49923Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="13"
          y="15"
          width="5"
          height="1.8"
          rx="0.9"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
