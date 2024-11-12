import { forwardRef, ForwardedRef, HTMLAttributes } from "react";
import Lottie from "lottie-react";
import cloveLoader from "@/public/lottie/cloveLoader.json";
import { cn } from "@/lib/utils";
interface BCALoaderProps extends HTMLAttributes<HTMLDivElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  overlayProps?: HTMLAttributes<HTMLDivElement>;
}

const BCALoader = forwardRef<HTMLDivElement, BCALoaderProps>(
  (
    { className, containerProps, overlayProps, ...props }: BCALoaderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        {...containerProps}
        className={cn("lui-absolute lui-z-[100]", containerProps?.className)}
      >
        <div
          {...overlayProps}
          className={cn(
            "lui-fixed lui-left-0 lui-top-0 lui-flex lui-h-screen lui-w-screen lui-bg-ocean-primary-30/40",
            overlayProps?.className,
          )}
        />
        <div className="lui-fixed lui-left-0 lui-top-0 lui-flex lui-h-screen lui-w-screen lui-items-center lui-justify-center">
          <Lottie
            animationData={cloveLoader}
            loop={true}
            className={cn("lui-size-24", className)}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  },
);

export { BCALoader };
