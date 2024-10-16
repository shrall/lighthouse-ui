import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ArrowRightLargeOutline = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ ...props }, ref) => {
  return (
    <SVGIcon ref={ref} {...props}>
      <path
        d="M19.75 11.7256L4.75 11.7256"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
});
