import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CoinDollarOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <circle
          cx="12"
          cy="12"
          r="10.1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9.7002 13.5556C9.7002 14.4178 10.3669 15.1111 11.1847 15.1111H12.8557C13.5669 15.1111 14.1446 14.5067 14.1446 13.7511C14.1446 12.9422 13.7891 12.6489 13.2646 12.4622L10.5891 11.5289C10.0646 11.3422 9.70909 11.0578 9.70909 10.24C9.70909 9.49334 10.2869 8.88 10.998 8.88H12.6691C13.4869 8.88 14.1535 9.57334 14.1535 10.4356"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9224 8V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
