import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "lui-group lui-peer lui-inline-flex lui-shrink-0 lui-items-center",
      "lui-h-6 lui-w-[3.0625rem]",
      "lui-rounded-xl lui-border-transparent lui-p-1",
      "data-[state=checked]:lui-bg-ocean-secondary-20 data-[state=unchecked]:lui-bg-ocean-dark-10",
      "disabled:lui-cursor-not-allowed disabled:data-[state=checked]:lui-bg-ocean-light-40 disabled:data-[state=unchecked]:lui-bg-ocean-light-40",
      "lui-cursor-pointer lui-transition-colors focus-visible:lui-outline-none",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "lui-pointer-events-none lui-block lui-size-4",
        "lui-bg-ocean-light-10",
        "lui-border-2 lui-border-transparent group-hover:lui-border-ocean-light-30 group-disabled:group-hover:lui-border-transparent",
        "lui-rounded-xl lui-ring-0 lui-transition-all data-[state=checked]:lui-translate-x-6 data-[state=unchecked]:lui-translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
