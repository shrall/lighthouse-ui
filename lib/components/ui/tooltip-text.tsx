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

type TooltipTextProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
> & {
  children: React.ReactNode;
  title?: string;
  description: string | React.ReactNode;
  forceOpen?: boolean;
  contentProps?: TooltipPrimitive.TooltipContentProps;
};

const TooltipText = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTextProps
>(
  (
    {
      children,
      title,
      description,
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
            className={cn("lui-max-w-[228px]", contentProps.className)}
            {...contentProps}
            alignOffset={
              contentProps.align === "center" ? contentProps.alignOffset : -16
            }
          >
            {title && (
              <h3 className="lui-mb-2 lui-text-sm lui-font-semibold">
                {title}
              </h3>
            )}
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </TooltipContent>
        </TooltipComponent>
      </TooltipProvider>
    );
  },
);

export { TooltipText };
