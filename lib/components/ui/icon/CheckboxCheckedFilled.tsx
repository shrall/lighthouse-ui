import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CheckboxCheckedFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.455 2.76473C8.22176 2.26 10.0576 2.00222 11.9295 2.00001C13.7917 1.99802 15.6993 2.30932 17.592 2.90451C19.2907 3.43854 20.6139 4.77268 21.1319 6.47374C21.7036 8.35142 22.0021 10.2717 22 12.1463C21.9979 14.0008 21.7159 15.8316 21.1679 17.633C20.639 19.3714 19.2618 20.7281 17.5192 21.2264C15.7362 21.7365 13.8775 21.9979 11.9965 22C10.1416 22.0022 8.25865 21.6955 6.38145 21.1057C4.67422 20.5692 3.34656 19.2228 2.83756 17.511C2.28494 15.6516 1.99791 13.7345 2.00001 11.8514C2.00222 9.9952 2.27378 8.16917 2.80332 6.38428C3.32237 4.63488 4.70393 3.26514 6.455 2.76473Z"
          fill="currentColor"
        />
        <path
          d="M8.25 12L10.75 14.5L15.75 9.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
