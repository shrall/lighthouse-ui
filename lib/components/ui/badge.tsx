import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full w-fit font-semibold px-3 py-[3px] text-xs md:px-4 md:py-[5.5px] md:text-sm",
  {
    variants: {
      variant: {
        success: "text-ocean-success-20 bg-ocean-success-10",
        danger: "text-ocean-danger-20 bg-ocean-danger-10",
        warning: "text-ocean-warning-20 bg-ocean-warning-10",
        info: "text-ocean-primary-20 bg-ocean-secondary-10",
        inactive: "text-ocean-dark-20 bg-ocean-light-40",
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
        textOnly && "bg-transparent",
      )}
      {...props}
    />
  );
}

export { Badge };
