import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const UploadOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="22"
          y="22"
          width="20"
          height="2"
          rx="1"
          transform="rotate(-180 22 22)"
          fill="currentColor"
        />
        <path
          d="M12 17L12 3M12 3L7 8M12 3L17 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
