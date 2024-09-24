import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CheckboxIndeterminateFilled = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ ...props }, ref) => {
  return (
    <SVGIcon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.455 3.41005C8.22176 2.90533 10.0576 2.64755 11.9295 2.64533C13.7917 2.64334 15.6993 2.95465 17.592 3.54983C19.2907 4.08386 20.6139 5.418 21.1319 7.11907C21.7036 8.99674 22.0021 10.917 22 12.7916C21.9979 14.6461 21.7159 16.4769 21.1679 18.2783C20.639 20.0167 19.2618 21.3734 17.5192 21.8717C15.7362 22.3818 13.8775 22.6432 11.9965 22.6453C10.1416 22.6475 8.25865 22.3409 6.38145 21.751C4.67422 21.2145 3.34656 19.8681 2.83756 18.1563C2.28494 16.2969 1.99791 14.3798 2.00001 12.4967C2.00222 10.6405 2.27378 8.81449 2.80332 7.0296C3.32237 5.28021 4.70393 3.91046 6.455 3.41005Z"
        fill="currentColor"
      />
      <path
        d="M8 12.6453H16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
});
