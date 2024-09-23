import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DownloadDocOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2 12.0637V5C16.2 4.33726 15.6627 3.8 15 3.8H5C4.33726 3.8 3.8 4.33726 3.8 5V19C3.8 19.6627 4.33726 20.2 5 20.2H13.158C14.0751 21.3 15.4558 22 17 22H5C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V12.1C17.6769 12.0344 17.3425 12 17 12C16.7277 12 16.4605 12.0218 16.2 12.0637ZM7 6.1C6.50294 6.1 6.1 6.50294 6.1 7C6.1 7.49706 6.50294 7.9 7 7.9H13C13.4971 7.9 13.9 7.49706 13.9 7C13.9 6.50294 13.4971 6.1 13 6.1H7ZM6.1 10.5C6.1 10.0029 6.50294 9.6 7 9.6H11C11.4971 9.6 11.9 10.0029 11.9 10.5C11.9 10.9971 11.4971 11.4 11 11.4H7C6.50294 11.4 6.1 10.9971 6.1 10.5Z"
          fill="currentColor"
        />
        <circle
          cx="17"
          cy="17"
          r="4.15"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M17.1001 15V19M17.1001 19L18.6001 17.5M17.1001 19L15.6001 17.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
