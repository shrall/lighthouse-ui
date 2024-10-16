import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DoubleChevronLeftOutline = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ ...props }, ref) => {
  return (
    <SVGIcon ref={ref} {...props}>
      <path
        d="M12 18L6 12L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 18L13 12L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
});
