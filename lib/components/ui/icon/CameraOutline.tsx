import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CameraOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M16.2215 7.4547L16.2215 7.45471C16.4069 7.7329 16.7192 7.9 17.0535 7.9H19C20.1598 7.9 21.1 8.8402 21.1 10V17C21.1 18.1598 20.1598 19.1 19 19.1H5C3.8402 19.1 2.9 18.1598 2.9 17V10C2.9 8.8402 3.8402 7.9 5 7.9H6.94648C7.28084 7.9 7.59307 7.7329 7.77853 7.4547L8.85825 5.83513C9.24772 5.25091 9.90341 4.9 10.6056 4.9H13.3944C14.0966 4.9 14.7523 5.25091 15.1418 5.83513L16.2215 7.4547Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.8" />
      </SVGIcon>
    );
  },
);
