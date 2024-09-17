import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "lui-inline-flex lui-items-center lui-rounded-full lui-w-fit lui-font-semibold lui-px-3 lui-py-[3px] lui-text-xs md:lui-px-4 md:lui-py-[5.5px] md:lui-text-sm",
  {
    variants: {
      variant: {
        success: "lui-text-ocean-success-20 lui-bg-ocean-success-10",
        danger: "lui-text-ocean-danger-20 lui-bg-ocean-danger-10",
        warning: "lui-text-ocean-warning-20 lui-bg-ocean-warning-10",
        info: "lui-text-ocean-primary-10 lui-bg-ocean-secondary-10",
        inactive: "lui-text-ocean-dark-20 lui-bg-ocean-light-40",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  textOnly?: boolean;
}

function Badge({ className, variant, textOnly = false, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
        textOnly && "lui-bg-transparent",
      )}
      {...props}
    />
  );
}

export { Badge };
