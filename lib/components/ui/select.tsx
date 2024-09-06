import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import { Icon } from "./icon";

const Select = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "lui-group lui-flex lui-w-full lui-items-center lui-justify-between lui-border-b lui-border-ocean-dark-10 lui-bg-white lui-pb-2 lui-text-start lui-text-sm lui-text-ocean-dark-10 placeholder:lui-text-ocean-dark-10 focus:lui-outline-none data-[state=open]:lui-border-ocean-primary-10",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <Icon
        name="chevron-down-outline"
        className="lui-min-h-6 lui-min-w-6 lui-text-ocean-dark-10 lui-transition-all group-data-[state=open]:lui-rotate-180 group-data-[state=open]:lui-text-ocean-primary-10"
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "data-[state=open]:lui-animate-in data-[state=closed]:lui-animate-out data-[state=closed]:lui-fade-out-0 data-[state=open]:lui-fade-in-0 data-[state=closed]:lui-zoom-out-95 data-[state=open]:lui-zoom-in-95 data-[side=bottom]:lui-slide-in-from-top-2 data-[side=left]:lui-slide-in-from-right-2 data-[side=right]:lui-slide-in-from-left-2 data-[side=top]:lui-slide-in-from-bottom-2 lui-group lui-relative lui-z-50 lui-max-h-96 lui-min-w-[8rem] lui-overflow-hidden lui-rounded-md lui-bg-white lui-shadow-md",
        position === "popper" &&
          "data-[side=bottom]:lui-translate-y-1 data-[side=left]:lui--translate-x-1 data-[side=right]:lui-translate-x-1 data-[side=top]:lui--translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <div className="lui-h-[268px] lui-min-w-[var(--radix-select-trigger-width)] lui-divide-y lui-divide-ocean-light-30 lui-overflow-y-scroll">
        {children}
      </div>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    title: string;
    description?: string;
  }
>(({ className, children, title, description, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "lui-relative lui-flex lui-w-full lui-cursor-pointer lui-select-none lui-flex-col lui-items-start lui-rounded-sm lui-p-3 lui-outline-none hover:lui-bg-ocean-light-20 data-[disabled]:lui-pointer-events-none data-[state=checked]:lui-bg-ocean-secondary-10",
        className,
      )}
      {...props}
    >
      <div className="lui-hidden">
        <SelectPrimitive.ItemText>
          <span className="lui-text-sm lui-font-semibold lui-text-ocean-dark-20">
            {title}
          </span>{" "}
          {description && (
            <>
              -{" "}
              <span className="lui-text-sm lui-text-ocean-dark-20">
                {description}
              </span>
            </>
          )}
        </SelectPrimitive.ItemText>
      </div>
      <span className="lui-text-sm lui-font-semibold lui-text-ocean-dark-20">
        {title}
      </span>
      {description && (
        <span className="lui-text-xs lui-text-ocean-dark-10">
          {description}
        </span>
      )}
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "lui-px-3 lui-py-2 lui-text-xs lui-font-semibold lui-text-ocean-dark-10",
      className,
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Group
    ref={ref}
    className={cn("lui-divide-y lui-divide-ocean-light-30", className)}
    {...props}
  />
));

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
};
