import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const TransactionPendingOutline = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ ...props }, ref) => {
  return (
    <SVGIcon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9236 20.2H6C5.33726 20.2 4.8 19.6627 4.8 19V5C4.8 4.33726 5.33726 3.8 6 3.8H11.1V7C11.1 8.60163 12.3984 9.9 14 9.9H17.2V11.12C17.8434 11.2506 18.4493 11.4842 19 11.8027V8.82843C19 8.29799 18.7893 7.78929 18.4142 7.41421L16 5L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H12.6822C11.9769 21.531 11.3764 20.9168 10.9236 20.2ZM14.7272 6.27279L16.5544 8.1H14C13.3925 8.1 12.9 7.60751 12.9 7V4.44558L14.7272 6.27279Z"
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
        d="M17.8 17.5H15.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.8 15.5L15.8 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SVGIcon>
  );
});
