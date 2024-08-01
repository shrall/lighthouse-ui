"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("mb-2 text-sm", className)} {...props} />
));
TooltipTitle.displayName = "TooltipTitle";

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

export {
  Tooltip,
  TooltipTitle,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
};
