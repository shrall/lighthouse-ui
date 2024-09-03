import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icon } from "./icon";

const chipVariants = cva(
  "lui-inline-flex lui-items-center lui-border lui-gap-x-[10px] lui-rounded-lg lui-w-fit lui-px-3 lui-text-xs lui-font-semibold lui-transition-colors focus:lui-outline-none lui-leading-3 lui-max-w-[316px] lui-break-anywhere",
  {
    variants: {
      variant: {
        primary:
          "lui-bg-ocean-primary-10 lui-text-white aria-disabled:lui-bg-ocean-light-40 aria-disabled:lui-text-ocean-dark-10",
        secondary:
          "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10 aria-disabled:lui-bg-ocean-light-40 aria-disabled:lui-text-ocean-dark-10",
        outline:
          "lui-border-ocean-primary-10 lui-text-ocean-primary-10 aria-disabled:lui-bg-ocean-light-40 aria-disabled:lui-text-ocean-dark-10",
        inactive:
          "lui-bg-ocean-light-30 lui-text-ocean-dark-20 aria-disabled:lui-bg-ocean-light-40 aria-disabled:lui-text-ocean-dark-10",
      },
      size: {
        small: "lui-min-h-2 lui-py-[5px]",
        medium: "lui-min-h-4 lui-py-[9px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  disabled?: boolean;
  removeOnClick?: () => void;
}

function Chip({
  children,
  className,
  variant,
  size,
  disabled,
  removeOnClick,
  ...props
}: ChipProps) {
  return (
    <div
      className={cn(
        chipVariants({ variant, size }),
        className,
        props.onClick && "lui-cursor-pointer",
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children}
      {removeOnClick && (
        <Icon
          name="cross-large-outline"
          size={16}
          onClick={removeOnClick}
          className="lui-cursor-pointer"
        />
      )}
    </div>
  );
}

export { Chip };
