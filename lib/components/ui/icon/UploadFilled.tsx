import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const UploadFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <rect x="2" y="18" width="20" height="4" rx="2" fill="currentColor" />
        <path
          d="M14 9L14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15L10 9L7.41421 9C6.52331 9 6.07714 7.92286 6.70711 7.29289L11.2929 2.7071C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L17.2929 7.29289C17.9229 7.92286 17.4767 9 16.5858 9L14 9Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
