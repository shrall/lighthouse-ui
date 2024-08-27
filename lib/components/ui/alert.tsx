import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Icon } from "./icon";

const alertVariants = cva(
  "lui-relative lui-w-full lui-flex lui-flex-col lui-items-start lui-text-sm lui-rounded-[10px] lui-border lui-border-slate-200 lui-p-3 [&>svg~*]:lui-px-9 [&>svg+div]:lui-translate-y-[-3px] [&>svg]:lui-absolute first:[&>svg]:lui-left-4 [&>svg]:lui-top-4",
  {
    variants: {
      variant: {
        success: "lui-bg-ocean-success-10 lui-text-ocean-success-20",
        danger: "lui-bg-ocean-danger-10 lui-text-ocean-danger-20",
        warning: "lui-bg-ocean-warning-10 lui-text-ocean-warning-20",
        info: "lui-bg-ocean-secondary-10 lui-text-ocean-primary-20",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertVariants> & {
      actionType?: "close";
      alertAction?: () => void;
    }
>(
  (
    { className, variant, children, actionType, alertAction, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {variant === "success" && <Icon name="check-filled" />}
      {variant === "danger" && <Icon name="cross-filled" />}
      {variant === "warning" && <Icon name="exclamation-filled" />}
      {variant === "info" && <Icon name="info-filled" />}
      {children}
      {actionType === "close" && alertAction ? (
        <Icon
          name="cross-large-outline"
          className="lui-right-4 lui-cursor-pointer !lui-px-0"
          onClick={() => {
            alertAction();
          }}
        />
      ) : (
        alertAction && (
          <Icon
            name="chevron-right-outline"
            className="lui-right-4 lui-cursor-pointer !lui-px-0"
            onClick={() => {
              alertAction();
            }}
          />
        )
      )}
    </div>
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("lui-font-bold", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("lui-break-anywhere lui-text-start", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
