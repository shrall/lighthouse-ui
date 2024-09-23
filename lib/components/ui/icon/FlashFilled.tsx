import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const FlashFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4746 1.97719C14.837 1.56139 15.5069 1.95259 15.3228 2.47256L12.7737 9.67436H19.3748C19.7967 9.67436 20.029 10.1647 19.7617 10.4911L10.1614 22.2164C9.82084 22.6323 9.15356 22.2913 9.29118 21.7717L11.351 13.994H5.09912C4.66999 13.994 4.44023 13.4889 4.72221 13.1654L14.4746 1.97719Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
