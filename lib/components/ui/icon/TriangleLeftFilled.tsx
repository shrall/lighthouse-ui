import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const TriangleLeftFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21.9998C17.5228 21.9998 22 17.5226 22 11.9998C22 6.47691 17.5228 1.99976 12 1.99976C6.47715 1.99976 2 6.47691 2 11.9998C2 17.5226 6.47715 21.9998 12 21.9998ZM7.74995 11.5668C7.41662 11.7593 7.41662 12.2404 7.74995 12.4328L13.75 15.8969C14.0833 16.0894 14.5 15.8488 14.5 15.4639V8.53573C14.5 8.15083 14.0833 7.91026 13.7499 8.10271L7.74995 11.5668Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
