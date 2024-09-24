import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CompanyFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <mask
          id="mask0_4209_3048"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="22"
          height="21"
        >
          <path
            d="M2 21H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13H5C4.44772 13 4 13.4477 4 14V20C4 20.5523 4.44772 21 5 21H7C7.55228 21 8 20.5523 8 20V14C8 13.4477 7.55228 13 7 13Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 17H6.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M19 2H9C8.44772 2 8 2.44772 8 3V20C8 20.5523 8.44772 21 9 21H19C19.5523 21 20 20.5523 20 20V3C20 2.44772 19.5523 2 19 2Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M11 5H13V7H11V5ZM15 5H17V7H15V5ZM11 8.5H13V10.5H11V8.5ZM15 8.5H17V10.5H15V8.5ZM15 12H17V14H15V12ZM15 15.5H17V17.5H15V15.5Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_4209_3048)">
          <path d="M0 0H24V24H0V0Z" fill="currentColor" />
        </g>
      </SVGIcon>
    );
  },
);
