"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";
import { CheckboxUncheckedOutline } from "./icon/CheckboxUncheckedOutline";
import { CheckboxCheckedFilled } from "./icon/CheckboxCheckedFilled";
import { CheckboxIndeterminateFilled } from "./icon/CheckboxIndeterminateFilled";

export interface CheckboxProps
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
      id={props.name}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.target.dispatchEvent(new Event("click", { bubbles: true }));
        }
      }}
    >
      <CheckboxPrimitive.Indicator asChild forceMount>
        <CheckboxUncheckedOutline
          size={20}
          className={
            "lui-hidden lui-text-ocean-dark-10 group-disabled:lui-text-ocean-light-40 data-[state=unchecked]:lui-flex"
          }
        />
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Indicator asChild>
        <CheckboxCheckedFilled
          size={20}
          className={
            "lui-hidden lui-text-ocean-secondary-20 group-disabled:lui-text-ocean-light-40 data-[state=checked]:lui-flex"
          }
        />
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Indicator asChild>
        <CheckboxIndeterminateFilled
          size={20}
          className={
            "lui-hidden lui-text-ocean-secondary-20 group-disabled:lui-text-ocean-light-40 data-[state=indeterminate]:lui-flex"
          }
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && (
      <label
        htmlFor={props.name}
        className={cn(
          "lui-text-xs lui-text-ocean-dark-30",
          props.disabled && "lui-text-ocean-light-40",
          label.className,
        )}
      >
        {label.text}
      </label>
    )}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
