import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ImageFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect
          x="2.75"
          y="4.75"
          width="18.5"
          height="14.5"
          rx="2.25"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 17.5L8.91123 10.6794C9.24604 10.293 9.81832 10.2214 10.238 10.5134L14.801 13.6877L16.4175 11.7119C16.7468 11.3095 17.3295 11.2265 17.758 11.5211L21 13.75V18C20.6936 18.6129 20.0672 19 19.382 19H4.5C3.67157 19 3 18.3284 3 17.5Z"
          fill="currentColor"
        />
        <path
          d="M21 18L10.238 10.5134C9.81832 10.2214 9.24604 10.293 8.91123 10.6794L3 17.5V17.5C3 18.3284 3.67157 19 4.5 19H19.382C20.0672 19 20.6936 18.6129 21 18V18ZM21 18V13.75L17.758 11.5211C17.3295 11.2265 16.7468 11.3095 16.4175 11.7119L14.75 13.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="14.5"
          cy="8.5"
          r="0.75"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </SVGIcon>
    );
  },
);
