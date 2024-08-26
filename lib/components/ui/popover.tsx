import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=open]:lui-animate-in data-[state=closed]:lui-animate-out data-[state=closed]:lui-fade-out-0 data-[state=open]:lui-fade-in-0 data-[state=closed]:lui-zoom-out-95 data-[state=open]:lui-zoom-in-95 data-[side=bottom]:lui-slide-in-from-top-2 data-[side=left]:lui-slide-in-from-right-2 data-[side=right]:lui-slide-in-from-left-2 data-[side=top]:lui-slide-in-from-bottom-2 lui-z-50 lui-w-auto lui-rounded-xl lui-bg-white lui-p-8 lui-text-ocean-dark-30 lui-shadow-md lui-outline-none",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
