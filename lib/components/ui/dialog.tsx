import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "data-[state=open]:lui-animate-in data-[state=closed]:lui-animate-out data-[state=closed]:lui-fade-out-0 data-[state=open]:lui-fade-in-0 lui-fixed lui-inset-0 lui-z-50 lui-bg-ocean-primary-30/40",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "data-[state=open]:lui-animate-in data-[state=closed]:lui-animate-out lui-font-bca",
        "data-[state=closed]:lui-fade-out-0 data-[state=open]:lui-fade-in-0",
        "data-[state=closed]:lui-zoom-out-95 data-[state=open]:lui-zoom-in-95",
        "data-[state=closed]:lui-slide-out-to-left-1/2 data-[state=closed]:lui-slide-out-to-top-[48%] data-[state=open]:lui-slide-in-from-left-1/2 data-[state=open]:lui-slide-in-from-top-[48%]",
        "lui-fixed lui-left-[50%] lui-top-[50%] lui-z-50 lui-w-[calc(100vw-48px)] lui-max-w-[400px] lui-translate-x-[-50%] lui-translate-y-[-50%] lui-gap-4 lui-rounded-[1.25rem] sm:lui-w-full",
        "lui-bg-white lui-p-6 lui-duration-200 sm:lui-p-8",
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "lui-flex lui-flex-col lui-gap-y-3 lui-text-center",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "lui-mt-8 lui-flex lui-flex-col-reverse lui-gap-x-4 lui-gap-y-3 sm:lui-flex-row",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "lui-text-base lui-font-bold lui-text-ocean-primary-20 sm:lui-text-lg",
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("lui-text-sm lui-text-ocean-dark-20", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
