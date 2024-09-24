import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const HomeFilledAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.50695 9.03319C2.18653 9.28953 2 9.67762 2 10.088C2 10.834 2.60477 11.4388 3.35078 11.4388H4.5V19H3.5C2.94772 19 2.5 19.4477 2.5 20L2.5 21C2.5 21.5523 2.94771 22 3.5 22H20.5C21.0523 22 21.5 21.5523 21.5 21V20C21.5 19.4477 21.0523 19 20.5 19H19.5V11.4388H20.6492C21.3952 11.4388 22 10.834 22 10.088C22 9.67762 21.8135 9.28953 21.493 9.03319L13.2494 2.43826C12.519 1.85391 11.481 1.85391 10.7506 2.43826L2.50695 9.03319ZM16.5 11.9388C16.5 11.6626 16.2761 11.4388 16 11.4388H14C13.7239 11.4388 13.5 11.6626 13.5 11.9388V18.5C13.5 18.7761 13.7239 19 14 19H16C16.2761 19 16.5 18.7761 16.5 18.5V11.9388ZM10.5 11.9388C10.5 11.6626 10.2761 11.4388 10 11.4388H8C7.72386 11.4388 7.5 11.6626 7.5 11.9388V18.5C7.5 18.7761 7.72386 19 8 19H10C10.2761 19 10.5 18.7761 10.5 18.5V11.9388Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
