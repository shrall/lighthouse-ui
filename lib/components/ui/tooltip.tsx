"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipComponent = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "lui-z-50 lui-box-content lui-overflow-hidden lui-rounded-[10px] lui-bg-ocean-dark-20 lui-px-5 lui-py-4 lui-text-start lui-text-xs lui-text-ocean-light-20 lui-shadow-md",
      className,
    )}
    {...props}
  >
    {children}
    <TooltipPrimitive.Arrow asChild={true}>
      <svg
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.43 14.2834C13.8764 16.8727 10.1236 16.8727 8.57003 14.2834L-8.89357e-07 0L24 0L15.43 14.2834Z"
          fill="#495057"
        />
      </svg>
    </TooltipPrimitive.Arrow>
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface TooltipProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: string;
  image?: React.ReactNode;
  forceOpen?: boolean;
}

const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & TooltipProps
>(
  (
    {
      className,
      sideOffset = 4,
      children,
      trigger,
      title,
      image,
      forceOpen = false,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    return (
      <TooltipProvider>
        <TooltipComponent open={open || forceOpen} onOpenChange={setOpen}>
          <TooltipTrigger
            onClick={() => setOpen(!open)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {trigger}
          </TooltipTrigger>
          {image ? (
            <TooltipContent
              ref={ref}
              sideOffset={sideOffset}
              className={cn(
                "lui-px-4 lui-py-[10px] md:lui-px-5 md:lui-py-4",
                className,
              )}
              {...props}
            >
              <div className="lui-hidden lui-flex-col lui-gap-y-6 md:lui-flex">
                {title && (
                  <h3 className="lui-break-anywhere lui-max-w-[228px] lui-text-sm lui-font-semibold">
                    {title}
                  </h3>
                )}
                <div className="lui-flex lui-gap-x-6">
                  {image}
                  <div className="lui-max-w-[228px]">{children}</div>
                </div>
              </div>
              <div className="lui-flex lui-flex-col lui-items-center lui-gap-y-4 md:lui-hidden">
                {image}
                <div className="lui-flex lui-max-w-[228px] lui-flex-col lui-gap-y-3">
                  {title && (
                    <h3 className="lui-break-anywhere lui-text-center lui-text-sm lui-font-semibold">
                      {title}
                    </h3>
                  )}
                  <div className="">{children}</div>
                </div>
              </div>
            </TooltipContent>
          ) : (
            <TooltipContent
              ref={ref}
              sideOffset={sideOffset}
              className={cn("lui-max-w-[228px]", className)}
              {...props}
            >
              {title && (
                <h3 className="lui-mb-2 lui-text-sm lui-font-semibold">
                  {title}
                </h3>
              )}
              {children}
            </TooltipContent>
          )}
        </TooltipComponent>
      </TooltipProvider>
    );
  },
);

export { Tooltip };
