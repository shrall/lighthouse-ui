import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const ReloadOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          d="M19.1458 11.7539C19.1944 13.1672 18.8229 14.5632 18.0782 15.7653C17.3335 16.9675 16.249 17.9218 14.962 18.5076C13.6749 19.0935 12.243 19.2845 10.8473 19.0565C9.45168 18.8285 8.15499 18.1918 7.12122 17.2269"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M21.073 12H16.927C16.7574 12 16.6648 11.8022 16.7734 11.672L18.8464 9.18437C18.9263 9.08842 19.0737 9.08842 19.1536 9.18437L21.2266 11.672C21.3352 11.8022 21.2426 12 21.073 12Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <path
          d="M2.92701 13L7.07299 13C7.24256 13 7.33519 13.1978 7.22664 13.328L5.15364 15.8156C5.07369 15.9116 4.92631 15.9116 4.84636 15.8156L2.77336 13.328C2.66481 13.1978 2.75744 13 2.92701 13Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <path
          d="M4.95718 13.2333C4.68568 11.683 4.93333 10.0863 5.66174 8.69107C6.39015 7.29581 7.5586 6.17988 8.98587 5.51637C10.4131 4.85285 12.0195 4.67883 13.5557 5.0213C15.092 5.36377 16.4723 6.20358 17.4826 7.41049"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </SVGIcon>
    );
  },
);
