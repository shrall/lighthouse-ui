import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const FilterOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M14.3636 15.3636L14.1 15.6272V16V18.4648C14.1 18.4983 14.0833 18.5295 14.0555 18.548L10.0555 21.2147C10.0321 21.2303 10.0162 21.2328 10.0052 21.2331C9.99092 21.2335 9.97222 21.23 9.95281 21.2197C9.93341 21.2093 9.92012 21.1957 9.91255 21.1836C9.90669 21.1742 9.9 21.1596 9.9 21.1315V16V15.6272L9.6364 15.3636L3.19705 8.92426C2.81908 8.54629 3.08677 7.9 3.62132 7.9H20.3787C20.9132 7.9 21.1809 8.54629 20.8029 8.92426L14.3636 15.3636Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect x="2" y="3" width="20" height="2" rx="1" fill="currentColor" />
      </SVGIcon>
    );
  },
);
