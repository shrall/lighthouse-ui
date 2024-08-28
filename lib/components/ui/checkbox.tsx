"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: {
    text: string;
    className?: string;
  };
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => (
  <div className="lui-flex lui-items-center lui-gap-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "lui-group lui-size-5 disabled:lui-cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild forceMount>
        <Icon
          name="checkbox-unchecked-outline"
          size={20}
          className={
            "lui-hidden lui-text-ocean-dark-10 group-disabled:lui-text-ocean-light-40 data-[state=unchecked]:lui-flex"
          }
        />
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Indicator asChild>
        <Icon
          name="checkbox-checked-filled"
          size={20}
          className={
            "lui-hidden lui-text-ocean-secondary-20 group-disabled:lui-text-ocean-light-40 data-[state=checked]:lui-flex"
          }
        />
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Indicator asChild>
        <Icon
          name="checkbox-indeterminate-filled"
          size={20}
          className={
            "lui-hidden lui-text-ocean-secondary-20 group-disabled:lui-text-ocean-light-40 data-[state=indeterminate]:lui-flex"
          }
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && (
      <span
        className={cn(
          "lui-text-xs lui-text-ocean-dark-30",
          props.disabled && "lui-text-ocean-light-40",
          label.className,
        )}
      >
        {label.text}
      </span>
    )}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
