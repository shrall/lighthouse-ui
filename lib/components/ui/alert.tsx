import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Icon } from "./icon";

const alertVariants = cva(
  "lui-relative lui-w-full lui-flex lui-items-start lui-text-sm lui-rounded-[10px] lui-border lui-border-slate-200 lui-p-3 lui-gap-3",
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
      {variant === "success" && (
        <Icon name="check-filled" className="lui-min-w-6" />
      )}
      {variant === "danger" && (
        <Icon name="cross-filled" className="lui-min-w-6" />
      )}
      {variant === "warning" && (
        <Icon name="exclamation-filled" className="lui-min-w-6" />
      )}
      {variant === "info" && (
        <Icon name="info-filled" className="lui-min-w-6" />
      )}
      <div className="lui-flex lui-w-full lui-flex-col">{children}</div>
      {actionType === "close" && alertAction ? (
        <Icon
          name="cross-large-outline"
          className="lui-min-w-6 lui-cursor-pointer"
          onClick={() => {
            alertAction();
          }}
        />
      ) : (
        alertAction && (
          <Icon
            name="chevron-right-outline"
            className="lui-min-w-6 lui-cursor-pointer"
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
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("lui-text-start lui-font-bold lui-break-anywhere", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("lui-text-start lui-break-anywhere", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
