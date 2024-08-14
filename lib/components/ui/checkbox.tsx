"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "./icon";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "lui-mt-1.5 lui-size-5 disabled:lui-cursor-not-allowed disabled:lui-opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator asChild forceMount>
      <Icon
        name="checkbox-unchecked-outline"
        size={20}
        className={
          "lui-hidden lui-text-ocean-dark-10 data-[state=unchecked]:lui-flex"
        }
      />
    </CheckboxPrimitive.Indicator>
    <CheckboxPrimitive.Indicator asChild>
      <Icon
        name="checkbox-checked-filled"
        size={20}
        className={
          "lui-hidden lui-text-ocean-secondary-20 data-[state=checked]:lui-flex"
        }
      />
    </CheckboxPrimitive.Indicator>
    <CheckboxPrimitive.Indicator asChild>
      <Icon
        name="checkbox-indeterminate-filled"
        size={20}
        className={
          "lui-hidden lui-text-ocean-secondary-20 data-[state=indeterminate]:lui-flex"
        }
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
