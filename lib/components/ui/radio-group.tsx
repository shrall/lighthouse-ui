import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn("lui-text-start", className)}
      {...props}
    />
  );
});

const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label?: {
      id: string;
      text: string;
    };
  }
>(({ className, label, ...props }, ref) => {
  const Comp = (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "lui-peer lui-aspect-square lui-size-5",
        "lui-rounded-full lui-border lui-border-ocean-dark-10 data-[state=checked]:lui-border-ocean-secondary-20",
        "lui-text-xl data-[state=checked]:lui-text-ocean-secondary-20",
        "focus:lui-outline-none",
        "disabled:lui-cursor-not-allowed disabled:lui-border-ocean-light-40 disabled:lui-text-ocean-light-40",
        "disabled:data-[state=checked]:lui-border-ocean-light-40 disabled:data-[state=checked]:lui-text-ocean-light-40",
        className,
      )}
      {...props}
      id={label ? label.id : props.id}
    >
      <RadioGroupPrimitive.Indicator className="lui-flex lui-items-center lui-justify-center">
        <Circle className="lui-size-[0.875rem] lui-fill-current lui-text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
  if (label) {
    return (
      <div className="lui-flex lui-items-center lui-gap-x-2">
        {Comp}
        <label
          htmlFor={label.id}
          className={cn(
            "lui-text-sm lui-leading-6 lui-text-ocean-dark-30",
            "peer-disabled:lui-cursor-not-allowed peer-disabled:lui-text-ocean-light-40",
          )}
        >
          {label.text}
        </label>
      </div>
    );
  }
  return Comp;
});
RadioButton.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioButton };
