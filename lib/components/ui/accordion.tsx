import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { PlusOutline } from "./icon/PlusOutline";
import { MinusOutline } from "./icon/MinusOutline";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("lui-w-full", className)}
    {...props}
  />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header
    className={cn(
      "lui-flex",
      "lui-px-8 lui-py-5 [&[data-state=open]]:lui-pb-3 [&[data-state=open]]:lui-pt-5",
      "lui-rounded-t-xl focus:lui-outline-none",
      "[&[data-state=open]]:lui-bg-ocean-light-20",
    )}
  >
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "lui-flex lui-flex-1 lui-items-center lui-justify-between",
        "lui-text-xl lui-font-semibold lui-text-ocean-dark-20 data-[state=open]:lui-font-bold data-[state=open]:lui-text-ocean-primary-30",
        "lui-border-b-2 lui-border-ocean-light-30",
        "lui-pb-3",
        "lui-transition-all",
        "[&[data-state=open]>.minus]:lui-block [&[data-state=open]>.plus]:lui-hidden",
        className,
      )}
      {...props}
    >
      {children}
      <PlusOutline className="plus lui-size-6 lui-shrink-0 lui-transition-transform lui-duration-200" />
      <MinusOutline className="minus lui-hidden lui-size-6 lui-shrink-0 lui-transition-transform lui-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "lui-overflow-hidden lui-text-base lui-text-ocean-dark-20",
      "lui-rounded-b-xl lui-bg-ocean-light-20 data-[state=closed]:lui-bg-transparent",
      "lui-transition-all data-[state=closed]:lui-animate-accordion-up data-[state=open]:lui-animate-accordion-down",
    )}
    {...props}
  >
    <div className={cn("lui-px-8 lui-pb-5 lui-text-start", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
