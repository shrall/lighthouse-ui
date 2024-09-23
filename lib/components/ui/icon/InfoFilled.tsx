import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const InfoFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <defs>
          <mask id="mask-info">
            <rect width="100%" height="100%" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8447 16.3164V11.7382C10.8447 11.1007 11.3619 10.5828 12.0002 10.5828C12.6385 10.5828 13.1556 11.1007 13.1556 11.7382V16.3164C13.1556 16.9547 12.6385 17.4719 12.0002 17.4719C11.3619 17.4719 10.8447 16.9547 10.8447 16.3164Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9999 9.32175C11.4382 9.32175 10.9319 8.98347 10.7171 8.46471C10.5014 7.94595 10.6202 7.34831 11.0178 6.95143C11.4147 6.55377 12.0124 6.43503 12.5311 6.64987C13.0507 6.86471 13.3889 7.37175 13.3889 7.93347C13.3889 8.30143 13.2421 8.65457 12.9819 8.91551C12.7217 9.17567 12.3678 9.32175 11.9999 9.32175H11.9999Z"
              fill="black"
            />
          </mask>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.4774 2 2 6.4774 2 12C2 17.5226 6.4774 22 12 22C17.5226 22 22 17.5226 22 12C22 6.4774 17.5226 2 12 2Z"
          fill="currentColor"
          mask="url(#mask-info)"
        />
      </SVGIcon>
    );
  },
);
