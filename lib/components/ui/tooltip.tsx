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
    <TooltipPrimitive.Arrow asChild>
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

export { TooltipContent, TooltipComponent, TooltipTrigger, TooltipProvider };
