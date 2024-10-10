import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DoubleChevronRightOutline = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ ...props }, ref) => {
  return (
    <SVGIcon ref={ref} {...props}>
      <path
        d="M12 18L18 12L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18L11 12L5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
});
