import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ShareFilled = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 6C20 7.65685 18.6569 9 17 9C16.281 9 15.621 8.74703 15.1043 8.32523L8.99639 11.8516C8.99879 11.9008 9 11.9502 9 12C9 12.0332 8.99946 12.0662 8.99839 12.0991L15.1408 15.6454C15.6519 15.2413 16.2978 15 17 15C18.6569 15 20 16.3431 20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 17.7727 14.0253 17.5513 14.0732 17.3384L8.25466 13.9791C7.70484 14.605 6.89855 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C6.8825 9 7.676 9.38105 8.22495 9.9876L14.0635 6.61674C14.0219 6.41769 14 6.2114 14 6C14 4.34315 15.3431 3 17 3C18.6569 3 20 4.34315 20 6Z"
          fill="currentColor"
        />
      </SVGIcon>
    );
  },
);
