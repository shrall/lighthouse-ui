"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type TooltipImageProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
> & {
  children: React.ReactNode;
  title?: string;
  description: React.ReactNode;
  image?: React.ReactNode;
  forceOpen?: boolean;
  contentProps?: TooltipPrimitive.TooltipContentProps;
};

const TooltipImage = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipImageProps
>(
  (
    {
      children,
      title,
      description,
      image,
      forceOpen = false,
      contentProps = {
        sideOffset: 4,
      },
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    return (
      <TooltipProvider>
        <TooltipComponent open={open || forceOpen} onOpenChange={setOpen}>
          <TooltipTrigger
            ref={ref}
            onClick={() => setOpen(!open)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            {...props}
          >
            {children}
          </TooltipTrigger>
          <TooltipContent
            className={cn(
              "lui-px-4 lui-py-[10px] md:lui-px-5 md:lui-py-4",
              contentProps.className,
            )}
            {...contentProps}
            alignOffset={
              contentProps.align === "center" ? contentProps.alignOffset : -16
            }
          >
            <div className="lui-hidden lui-flex-col lui-gap-y-6 md:lui-flex">
              {title && (
                <h3 className="lui-max-w-[228px] lui-text-sm lui-font-semibold lui-break-anywhere">
                  {title}
                </h3>
              )}
              <div className="lui-flex lui-gap-x-6">
                {image}
                <div className="lui-max-w-[228px]">{description}</div>
              </div>
            </div>
            <div className="lui-flex lui-flex-col lui-items-center lui-gap-y-4 md:lui-hidden">
              {image}
              <div className="lui-flex lui-max-w-[228px] lui-flex-col lui-gap-y-3">
                {title && (
                  <h3 className="lui-text-center lui-text-sm lui-font-semibold lui-break-anywhere">
                    {title}
                  </h3>
                )}
                <div>{description}</div>
              </div>
            </div>
          </TooltipContent>
        </TooltipComponent>
      </TooltipProvider>
    );
  },
);

export { TooltipImage };
