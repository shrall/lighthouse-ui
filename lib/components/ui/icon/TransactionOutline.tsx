import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const TransactionOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 20.2H7C6.33726 20.2 5.8 19.6627 5.8 19V5C5.8 4.33726 6.33726 3.8 7 3.8H12.1V7C12.1 8.60163 13.3984 9.9 15 9.9H18.2V19C18.2 19.6627 17.6627 20.2 17 20.2ZM17.5544 8.1L15.7272 6.27279L13.9 4.44559V7C13.9 7.60751 14.3925 8.1 15 8.1H17.5544ZM4 5C4 3.34315 5.34315 2 7 2H13.1716C13.702 2 14.2107 2.21071 14.5858 2.58579L17 5L19.4142 7.41421C19.7893 7.78929 20 8.29799 20 8.82843V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5Z"
          fill="currentColor"
        />
        <circle cx="8" cy="13" r="1" fill="currentColor" />
        <rect
          x="10"
          y="12.1"
          width="7"
          height="1.8"
          rx="0.9"
          fill="currentColor"
        />
        <circle cx="8" cy="17" r="1" fill="currentColor" />
        <rect
          x="10"
          y="16.1"
          width="7"
          height="1.8"
          rx="0.9"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
