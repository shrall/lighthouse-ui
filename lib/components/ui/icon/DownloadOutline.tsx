import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DownloadOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V14.5858L7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929C17.3166 10.9024 16.6834 10.9024 16.2929 11.2929L13 14.5858V3ZM3 20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H3Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
