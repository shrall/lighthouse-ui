import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ChevronRight, CircleCheck, XIcon } from "lucide-react";

const alertVariants = cva(
  "relative w-full flex flex-col items-start text-sm rounded-[10px] border border-slate-200 p-4 [&>svg~*]:px-9 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute first:[&>svg]:left-4 [&>svg]:top-4",
  {
    variants: {
      variant: {
        success: "bg-ocean-success-10 text-ocean-success-20",
        error: "bg-ocean-danger-10 text-ocean-danger-20",
        warning: "bg-ocean-warning-10 text-ocean-warning-20",
        info: "bg-ocean-secondary-10 text-ocean-primary-20",
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
      {variant === "success" && <CircleCheck size={24} />}
      {variant === "error" && <CircleCheck size={24} />}
      {variant === "warning" && <CircleCheck size={24} />}
      {variant === "info" && <CircleCheck size={24} />}
      {children}
      {actionType === "close" && alertAction ? (
        <XIcon
          size={24}
          className="right-4 cursor-pointer !px-0 text-ocean-dark-20"
          onClick={() => {
            alertAction();
          }}
        />
      ) : (
        alertAction && (
          <ChevronRight
            size={24}
            className="right-4 cursor-pointer !px-0 text-ocean-dark-20"
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
  <h5 ref={ref} className={cn("font-bold", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-start", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
