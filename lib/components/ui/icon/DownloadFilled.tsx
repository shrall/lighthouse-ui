import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DownloadFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect x="2" y="18" width="20" height="4" rx="2" fill="currentColor" />
        <path
          d="M10 10V4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V10H16.5858C17.4767 10 17.9229 11.0771 17.2929 11.7071L12.7071 16.2929C12.3166 16.6834 11.6834 16.6834 11.2929 16.2929L6.70711 11.7071C6.07714 11.0771 6.52331 10 7.41421 10H10Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
