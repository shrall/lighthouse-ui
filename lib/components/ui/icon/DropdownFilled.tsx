import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const DropdownFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M12.7071 16.2929C12.3166 16.6834 11.6834 16.6834 11.2929 16.2929L5.7071 10.7071C5.07714 10.0771 5.52331 9 6.41421 9H17.5858C18.4767 9 18.9229 10.0771 18.2929 10.7071L12.7071 16.2929Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
