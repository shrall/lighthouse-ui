import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const SettingFilledAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <g clipPath="url(#clip0_1309_2029)">
          <path
            d="M9.95405 2.20997C11.303 1.9271 12.6958 1.92642 14.045 2.20797C14.1349 2.80126 14.3574 3.36666 14.6958 3.86215C15.0343 4.35764 15.4801 4.77048 16 5.06997C16.5196 5.3705 17.1002 5.55004 17.6987 5.59522C18.2973 5.64041 18.8983 5.55009 19.457 5.33097C20.3753 6.35903 21.0709 7.56601 21.5 8.87597C21.0314 9.25055 20.6532 9.72592 20.3935 10.2668C20.1338 10.8076 19.9993 11.4 20 12C20 13.264 20.586 14.391 21.502 15.124C21.0704 16.4328 20.3739 17.6389 19.456 18.667C18.8974 18.448 18.2966 18.3578 17.6983 18.403C17.0999 18.4481 16.5195 18.6276 16 18.928C15.4805 19.2274 15.0351 19.6399 14.6968 20.1351C14.3585 20.6302 14.1361 21.1951 14.046 21.788C12.6973 22.0715 11.3044 22.0729 9.95505 21.792C9.86559 21.1982 9.64335 20.6322 9.30487 20.1361C8.96639 19.6401 8.52038 19.2268 8.00005 18.927C7.48041 18.6266 6.89975 18.4472 6.30124 18.4022C5.70272 18.3572 5.10176 18.4477 4.54305 18.667C3.62465 17.6386 2.92905 16.4313 2.50005 15.121C2.96844 14.7466 3.34651 14.2716 3.60618 13.7311C3.86586 13.1906 4.00048 12.5986 4.00005 11.999C4.00054 11.3989 3.86575 10.8063 3.60571 10.2655C3.34568 9.72463 2.96707 9.24935 2.49805 8.87497C2.92972 7.56609 3.62616 6.36007 4.54405 5.33197C5.1027 5.55093 5.70352 5.64117 6.30184 5.59598C6.90017 5.5508 7.48062 5.37135 8.00005 5.07097C8.51959 4.77157 8.96503 4.35899 9.30331 3.86388C9.64158 3.36876 9.864 2.80381 9.95405 2.21097V2.20997ZM12 15C12.7957 15 13.5588 14.6839 14.1214 14.1213C14.684 13.5587 15 12.7956 15 12C15 11.2043 14.684 10.4413 14.1214 9.87865C13.5588 9.31604 12.7957 8.99997 12 8.99997C11.2044 8.99997 10.4413 9.31604 9.87873 9.87865C9.31612 10.4413 9.00005 11.2043 9.00005 12C9.00005 12.7956 9.31612 13.5587 9.87873 14.1213C10.4413 14.6839 11.2044 15 12 15Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1309_2029">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </SVGIcon>
    );
  },
);
