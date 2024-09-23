import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ArrowRightOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H18.5858L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
