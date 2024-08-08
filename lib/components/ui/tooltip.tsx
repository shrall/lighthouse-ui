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
      "z-50 box-content overflow-hidden rounded-[10px] bg-ocean-dark-20 px-5 py-4 text-start text-xs text-ocean-light-20 shadow-md",
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
              className={cn("px-4 py-[10px] md:px-5 md:py-4", className)}
              {...props}
            >
              <div className="hidden flex-col gap-y-6 md:flex">
                {title && <h3 className="text-sm font-semibold">{title}</h3>}
                <div className="flex gap-x-6">
                  {image}
                  <div className="max-w-[228px]">{children}</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-4 md:hidden">
                {image}
                <div className="flex flex-col gap-y-3">
                  {title && (
                    <h3 className="text-center text-sm font-semibold">
                      {title}
                    </h3>
                  )}
                  <div className="max-w-[228px]">{children}</div>
                </div>
              </div>
            </TooltipContent>
          ) : (
            <TooltipContent
              ref={ref}
              sideOffset={sideOffset}
              className={cn("max-w-[228px]", className)}
              {...props}
            >
              {title && <h3 className="mb-2 text-sm font-semibold">{title}</h3>}
              {children}
            </TooltipContent>
          )}
        </TooltipComponent>
      </TooltipProvider>
    );
  },
);

export { Tooltip };
