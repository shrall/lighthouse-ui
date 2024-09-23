import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const MarkAllAsReadOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <g clipPath="url(#clip0_3790_18605)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 6.93335H6.5C5.67157 6.93335 5 7.60492 5 8.43335V16.4333C5 16.5177 5.09396 16.5679 5.1641 16.5212C5.73904 16.1379 6.41457 15.9333 7.10555 15.9333H17.5C18.3284 15.9333 19 15.2618 19 14.4333V8.43335C19 7.60492 18.3284 6.93335 17.5 6.93335ZM5.99615 17.7692C6.32469 17.5502 6.7107 17.4333 7.10555 17.4333H17.5C19.1569 17.4333 20.5 16.0902 20.5 14.4333V8.43335C20.5 6.7765 19.1569 5.43335 17.5 5.43335H6.5C4.84315 5.43335 3.5 6.7765 3.5 8.43335V17.5648C3.5 18.3635 4.39015 18.8399 5.0547 18.3969L5.99615 17.7692Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25 9.43335C7.25 9.01914 7.58579 8.68335 8 8.68335H16.5C16.9142 8.68335 17.25 9.01914 17.25 9.43335C17.25 9.84756 16.9142 10.1833 16.5 10.1833H8C7.58579 10.1833 7.25 9.84756 7.25 9.43335ZM7.25 12.9333C7.25 12.5191 7.58579 12.1833 8 12.1833H14.5C14.9142 12.1833 15.25 12.5191 15.25 12.9333C15.25 13.3476 14.9142 13.6833 14.5 13.6833H8C7.58579 13.6833 7.25 13.3476 7.25 12.9333Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7804 12.5303C19.0733 12.2374 19.0733 11.7626 18.7804 11.4697C18.4875 11.1768 18.0126 11.1768 17.7197 11.4697L11.25 17.9394L8.78034 15.4697C8.48745 15.1768 8.01258 15.1768 7.71968 15.4696C7.42678 15.7625 7.42677 16.2374 7.71966 16.5303L10.7197 19.5304C10.8603 19.6711 11.0511 19.7501 11.25 19.7501C11.4489 19.7501 11.6397 19.6711 11.7803 19.5304L18.7804 12.5303ZM22.841 12.5909C23.1339 12.2981 23.1339 11.8232 22.841 11.5303C22.5481 11.2374 22.0733 11.2374 21.7804 11.5303L14.7803 18.5304C14.4874 18.8233 14.4874 19.2981 14.7803 19.591C15.0732 19.8839 15.5481 19.8839 15.841 19.591L22.841 12.5909Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1893 19.0001C10.1892 18.9999 10.1894 19.0002 10.1893 19.0001L7.71966 16.5303C7.42677 16.2374 7.42678 15.7625 7.71968 15.4696C8.01258 15.1768 8.48745 15.1768 8.78034 15.4697L11.25 17.9394L17.7189 11.4705C17.7188 11.4706 17.7191 11.4703 17.7189 11.4705C17.7191 11.4704 17.7196 11.4698 17.7197 11.4697C18.0126 11.1768 18.4875 11.1768 18.7804 11.4697C18.9843 11.6735 19.0462 11.9656 18.9663 12.2231C18.9314 12.3355 18.8694 12.4413 18.7804 12.5303L11.7803 19.5304C11.6397 19.6711 11.4489 19.7501 11.25 19.7501C11.0511 19.7501 10.8603 19.6711 10.7197 19.5304L10.1893 19.0001ZM13.3205 20.1116L12.841 20.5911C12.419 21.013 11.8467 21.2501 11.25 21.2501C10.6532 21.2501 10.0809 21.013 9.65898 20.5911L6.65898 17.591C5.78032 16.7123 5.78034 15.2876 6.65904 14.409C7.53773 13.5303 8.96235 13.5303 9.84102 14.409L11.25 15.8181L16.6591 10.409C17.5378 9.53033 18.9624 9.53033 19.8411 10.409C20.0045 10.5725 20.1376 10.7549 20.2402 10.9491L20.7197 10.4696C21.5984 9.59095 23.023 9.59095 23.9017 10.4696C24.7804 11.3483 24.7804 12.7729 23.9017 13.6516L16.9016 20.6517C16.0229 21.5304 14.5983 21.5304 13.7196 20.6517C13.5562 20.4882 13.4231 20.3059 13.3205 20.1116ZM14.5944 18.8377C14.5145 19.0951 14.5764 19.3872 14.7803 19.591C15.0732 19.8839 15.5481 19.8839 15.841 19.591L22.8404 12.5916C23.1333 12.2987 23.1339 11.8232 22.841 11.5303C22.5481 11.2374 22.0733 11.2374 21.7804 11.5303L14.7803 18.5304C14.6913 18.6194 14.6293 18.7252 14.5944 18.8377Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3790_18605">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </SVGIcon>
    );
  },
);
