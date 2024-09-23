import * as React from "react";
import { IconProps, SVGIcon } from "./SVGIcon";

export const UserSettingOutline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ ...props }, ref) => {
    return (
      <SVGIcon ref={ref} {...props}>
        <g clipPath="url(#clip0_1309_1731)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.8 6C9.8 7.21503 10.785 8.2 12 8.2C13.215 8.2 14.2 7.21503 14.2 6C14.2 4.78497 13.215 3.8 12 3.8C10.785 3.8 9.8 4.78497 9.8 6ZM12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2ZM11.5 12.8C8.07583 12.8 5.3 15.5758 5.3 19C5.3 19.1105 5.38954 19.2 5.5 19.2H14.1449C14.3079 19.8616 14.6026 20.4714 14.9996 21H5.5C4.39543 21 3.5 20.1046 3.5 19C3.5 14.5817 7.08172 11 11.5 11H12.5C14.5916 11 16.4956 11.8026 17.921 13.1167C17.2471 13.265 16.6241 13.5491 16.0824 13.9391C15.0707 13.2217 13.8346 12.8 12.5 12.8H11.5Z"
            fill="currentColor"
          />
          <path
            d="M21.826 15.3243C22.1973 15.7411 22.4797 16.2297 22.6555 16.7594C22.4682 16.9096 22.3175 17.1007 22.2144 17.3185C22.1114 17.5364 22.0587 17.7754 22.0603 18.0177C22.0615 18.2601 22.117 18.4997 22.2226 18.7188C22.3282 18.9378 22.4812 19.1307 22.6703 19.2829C22.5003 19.8107 22.2232 20.2961 21.8564 20.7087C21.6318 20.6191 21.3905 20.5814 21.1506 20.5985C20.9107 20.6155 20.6782 20.6868 20.4706 20.807C20.0328 21.0597 19.7612 21.4907 19.6929 21.9587C19.1522 22.0689 18.5934 22.0657 18.0514 21.9492C18.014 21.7094 17.9236 21.4805 17.7867 21.2796C17.6498 21.0787 17.4701 20.9109 17.2608 20.7887C17.0519 20.6663 16.8188 20.5925 16.5787 20.5728C16.3387 20.5531 16.098 20.588 15.8745 20.6749C15.503 20.2583 15.2204 19.7699 15.0443 19.2402C15.2318 19.0901 15.3828 18.8989 15.486 18.681C15.5893 18.463 15.642 18.2239 15.6405 17.9813C15.6392 17.739 15.5837 17.4993 15.478 17.2803C15.3724 17.0613 15.2193 16.8685 15.0302 16.7163C15.2003 16.1884 15.4775 15.7029 15.8444 15.2904C16.0689 15.3799 16.31 15.4176 16.5498 15.4006C16.7896 15.3837 17.0219 15.3125 17.2295 15.1925C17.4375 15.0726 17.6154 14.9069 17.75 14.7075C17.8846 14.5081 17.9725 14.2802 18.0072 14.0408C18.5479 13.9305 19.1067 13.9337 19.6487 14.0502C19.6861 14.2901 19.7766 14.5189 19.9134 14.7198C20.0503 14.9207 20.23 15.0885 20.4393 15.2107C20.6482 15.3332 20.8814 15.407 21.1214 15.4267C21.3614 15.4464 21.6024 15.4113 21.826 15.3243ZM17.8109 18.5997C17.9721 18.8789 18.2361 19.0834 18.545 19.1684C18.8538 19.2533 19.1821 19.2116 19.4577 19.0525C19.7332 18.8934 19.9335 18.6299 20.0143 18.32C20.0952 18.0101 20.0501 17.6791 19.8889 17.4C19.7277 17.1208 19.4636 16.9162 19.1548 16.8313C18.846 16.7464 18.5177 16.788 18.2421 16.9471C17.9666 17.1062 17.7663 17.3697 17.6854 17.6796C17.6046 17.9896 17.6497 18.3205 17.8109 18.5997Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1309_1731">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </SVGIcon>
    );
  },
);
