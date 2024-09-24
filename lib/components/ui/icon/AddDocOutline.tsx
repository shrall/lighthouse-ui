import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const AddDocOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2 11.12V9.9H14C12.3984 9.9 11.1 8.60163 11.1 7V3.8H6C5.33726 3.8 4.8 4.33726 4.8 5V19C4.8 19.6627 5.33726 20.2 6 20.2H10.9236C11.3764 20.9168 11.9769 21.531 12.6822 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12.1716C12.702 2 13.2107 2.21071 13.5858 2.58579L16 5L18.4142 7.41421C18.7893 7.78929 19 8.29799 19 8.82843V11.8027C18.4493 11.4842 17.8434 11.2506 17.2 11.12ZM14.7272 6.27279L16.5544 8.1H14C13.3925 8.1 12.9 7.60751 12.9 7V4.44558L14.7272 6.27279Z"
          fill="currentColor"
        />
        <circle
          cx="16"
          cy="17"
          r="4.25"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 15L16 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 17H18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </SVGIcon>
    );
  },
);
