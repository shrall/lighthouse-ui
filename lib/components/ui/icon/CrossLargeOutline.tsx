import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CrossLargeOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5857 11.9999L5.29318 17.2924C4.90266 17.6829 4.90266 18.3161 5.29318 18.7066C5.6837 19.0971 6.31687 19.0971 6.70739 18.7066L11.9999 13.4141L17.2924 18.7066C17.6829 19.0971 18.3161 19.0971 18.7066 18.7066C19.0971 18.3161 19.0971 17.6829 18.7066 17.2924L13.4141 11.9999L18.7069 6.70711C19.0974 6.31658 19.0974 5.68342 18.7069 5.29289C18.3164 4.90237 17.6832 4.90237 17.2927 5.29289L11.9999 10.5857L6.70711 5.29289Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
