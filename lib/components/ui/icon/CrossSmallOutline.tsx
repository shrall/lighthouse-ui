import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const CrossSmallOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5857 12.0001L7.05024 15.5356C6.65972 15.9261 6.65972 16.5592 7.05024 16.9498C7.44077 17.3403 8.07393 17.3403 8.46446 16.9498L12 13.4143L15.5355 16.9498C15.926 17.3403 16.5592 17.3403 16.9497 16.9498C17.3402 16.5593 17.3402 15.9261 16.9497 15.5356L13.4142 12.0001L16.9497 8.46449C17.3403 8.07397 17.3403 7.4408 16.9497 7.05028C16.5592 6.65975 15.926 6.65975 15.5355 7.05028L12 10.5858L8.46443 7.05031C8.07391 6.65979 7.44074 6.65979 7.05022 7.05031C6.65969 7.44083 6.65969 8.074 7.05022 8.46452L10.5857 12.0001Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
