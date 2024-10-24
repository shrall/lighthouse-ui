import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { CheckFilled } from "./icon/CheckFilled";
import { CrossFilled } from "./icon/CrossFilled";
import { ExclamationFilled } from "./icon/ExclamationFilled";
import { InfoFilled } from "./icon/InfoFilled";
import { CrossLargeOutline } from "./icon/CrossLargeOutline";
import { ChevronRightOutline } from "./icon/ChevronRightOutline";

const alertVariants = cva(
  "lui-relative lui-w-full lui-flex lui-items-start lui-text-sm lui-rounded-[10px] lui-p-3 lui-gap-3",
  {
    variants: {
      variant: {
        success: "lui-bg-ocean-success-10 lui-text-ocean-success-20",
        danger: "lui-bg-ocean-danger-10 lui-text-ocean-danger-20",
        warning: "lui-bg-ocean-warning-10 lui-text-ocean-warning-20",
        info: "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    /** Description of the alert */
    description?: string;
    /** Action type of the alert. Default shows a chevron right icon, close shows a cross icon */
    actionType?: "default" | "close";
    /** Callback function for the alert action when the icon is clicked */
    alertAction?: () => void;
  };

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      children,
      actionType = "default",
      alertAction,
      title,
      description,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      title={title}
      {...props}
    >
      {variant === "success" && <CheckFilled className="lui-min-w-6" />}
      {variant === "danger" && <CrossFilled className="lui-min-w-6" />}
      {variant === "warning" && <ExclamationFilled className="lui-min-w-6" />}
      {variant === "info" && <InfoFilled className="lui-min-w-6" />}
      <div className="lui-flex lui-w-full lui-flex-col">
        <AlertTitle>{title}</AlertTitle>
        {description && <AlertDescription>{description}</AlertDescription>}
      </div>
      {actionType === "close" && alertAction ? (
        <CrossLargeOutline
          className="lui-min-w-6 lui-cursor-pointer"
          onClick={() => {
            alertAction();
          }}
        />
      ) : (
        alertAction && (
          <ChevronRightOutline
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
    className={cn(
      "lui-text-start lui-font-bold lui-leading-6 lui-break-anywhere",
      className,
    )}
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
    className={cn("lui-text-start lui-leading-6 lui-break-anywhere", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert };
