import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { MinusOutline } from "./icon/MinusOutline";
import { ChevronDownOutline } from "./icon/ChevronDownOutline";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("lui-w-full lui-space-y-2", className)}
    {...props}
  />
));
Accordion.displayName = "Accordion";

const AccordionItem = AccordionPrimitive.Item;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    style?: "underline" | "outline";
  }
>(({ className, children, style = "underline", ...props }, ref) => (
  <AccordionPrimitive.Header
    className={cn(
      "lui-flex",
      style === "underline" && "lui-px-5 lui-pt-5 md:lui-px-8",
      style === "underline" && "lui-rounded-t-xl focus:lui-outline-none",
      style === "underline" && "[&[data-state=open]]:lui-bg-ocean-light-20",
    )}
  >
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "lui-group lui-flex lui-flex-1 lui-items-center lui-justify-between",
        "lui-font-semibold",
        "lui-transition-all",
        style === "underline" &&
          "lui-text-lg lui-text-ocean-dark-20 data-[state=open]:lui-font-bold data-[state=open]:lui-text-ocean-primary-30 md:lui-text-xl",
        style === "underline" && "lui-border-b-2 lui-border-ocean-light-30",
        style === "underline" && "lui-pb-5",
        style === "outline" && "lui-text-base lui-text-ocean-primary-20",
        style === "outline" && "lui-px-6 lui-py-[1.125rem]",
        style === "outline" &&
          "lui-rounded-lg lui-border lui-border-ocean-light-30 [&[data-state=open]]:lui-rounded-b-none",
        style === "outline" &&
          "lui-transition-colors hover:lui-bg-ocean-light-20",
        className,
      )}
      {...props}
    >
      {children}
      <div className="lui-relative lui-size-6 lui-text-ocean-primary-10">
        {style === "underline" && (
          <>
            <MinusOutline className="lui-absolute lui-shrink-0 lui-transition-transform lui-duration-200" />
            <MinusOutline className="lui-absolute lui-shrink-0 lui-transition-transform lui-duration-200 group-data-[state=closed]:lui-rotate-90" />
          </>
        )}
        {style === "outline" && (
          <ChevronDownOutline className="lui-absolute lui-shrink-0 lui-transition-transform lui-duration-200 group-data-[state=open]:lui-rotate-180" />
        )}
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    style?: "underline" | "outline";
  }
>(({ className, children, style = "underline", ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "lui-overflow-hidden",
      "lui-text-ocean-dark-20",
      "lui-transition-all data-[state=closed]:lui-animate-accordion-up data-[state=open]:lui-animate-accordion-down",
      style === "underline" && "lui-text-sm md:lui-text-base",
      style === "underline" &&
        "lui-rounded-b-xl lui-bg-ocean-light-20 data-[state=closed]:lui-bg-transparent",
      style === "outline" && "lui-rounded-b-lg lui-border lui-border-t-0",
      style === "outline" && "lui-text-sm",
    )}
    {...props}
  >
    <div
      className={cn(
        "lui-text-start",
        style === "underline" && "lui-px-5 lui-pb-5 lui-pt-4 md:lui-px-8",
        style === "outline" && "lui-px-6 lui-py-4",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
