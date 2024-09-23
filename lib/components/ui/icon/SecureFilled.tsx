import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const SecureFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.89528 6.74755L8.89525 6.74757C8.27589 7.06191 7.66739 7.37075 7.11612 7.63927C6.7036 7.84021 6.43152 8.27645 6.44491 8.75631C6.61072 14.6992 8.66748 16.9375 11.4951 18.5332C11.8105 18.7112 12.1895 18.7112 12.5049 18.5332C15.3325 16.9375 17.3893 14.6992 17.5551 8.75631C17.5685 8.27644 17.2964 7.84021 16.8839 7.63927C16.3326 7.37075 15.7241 7.06191 15.1047 6.74757L15.1047 6.74754C14.1895 6.28304 13.2505 5.80649 12.4374 5.43018C12.1585 5.30107 11.8415 5.30107 11.5625 5.43018C10.7495 5.80649 9.81051 6.28304 8.89528 6.74755Z"
          fill="currentColor"
        />
        <path
          d="M9.93262 12.2949L11.0966 13.4854L14.0675 10.5145"
          stroke="currentColor"
          strokeWidth="1.90476"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
