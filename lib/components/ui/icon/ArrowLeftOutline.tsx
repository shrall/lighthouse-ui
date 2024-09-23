import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ArrowLeftOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.29289 7.29289C6.68342 6.90237 7.31658 6.90237 7.70711 7.29289C8.09763 7.68342 8.09763 8.31658 7.70711 8.70711L5.41421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H5.41421L7.70711 15.2929C8.09763 15.6834 8.09763 16.3166 7.70711 16.7071C7.31658 17.0976 6.68342 17.0976 6.29289 16.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L6.29289 7.29289Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
