import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const InvoiceOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.8 19.6544L7.34541 18.109C8.29278 17.1616 9.84614 17.2213 10.718 18.2385L12 19.7341L13.282 18.2385C14.1539 17.2213 15.7072 17.1616 16.6546 18.109L18.2 19.6544V5C18.2 4.33726 17.6627 3.8 17 3.8H7C6.33726 3.8 5.8 4.33726 5.8 5V19.6544ZM7 2C5.34315 2 4 3.34315 4 5V20.3787C4 21.715 5.61571 22.3843 6.56066 21.4393L8.61821 19.3818C8.82415 19.1758 9.16184 19.1888 9.35139 19.41L10.8611 21.1713C11.4598 21.8697 12.5402 21.8697 13.1389 21.1713L14.6486 19.41C14.8382 19.1888 15.1758 19.1758 15.3818 19.3818L17.4393 21.4393C18.3843 22.3843 20 21.715 20 20.3787V5C20 3.34315 18.6569 2 17 2H7Z"
          fill="currentColor"
        />
        <path
          d="M9.69995 12.5556C9.69995 13.4178 10.3666 14.1111 11.1844 14.1111H12.8555C13.5666 14.1111 14.1444 13.5067 14.1444 12.7511C14.1444 11.9422 13.7888 11.6489 13.2644 11.4622L10.5888 10.5289C10.0644 10.3422 9.70885 10.0578 9.70885 9.24C9.70885 8.49334 10.2866 7.88 10.9977 7.88H12.6688C13.4866 7.88 14.1533 8.57334 14.1533 9.43556"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9221 7V15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    );
  },
);
