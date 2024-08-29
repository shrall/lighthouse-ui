import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Icon, IconType } from "./icon";

const buttonVariants = cva(
  "lui-inline-flex lui-items-center lui-justify-center lui-whitespace-nowrap lui-rounded-full lui-transition-colors lui-w-fit",
  {
    variants: {
      variant: {
        primary:
          "lui-bg-ocean-primary-10 lui-text-ocean-light-10 hover:lui-bg-ocean-primary-20 active:lui-bg-ocean-primary-30 disabled:lui-bg-ocean-light-40",
        secondary:
          "lui-bg-transparent lui-border lui-border-ocean-primary-10 lui-text-ocean-primary-10 hover:lui-bg-ocean-light-20 active:lui-bg-ocean-secondary-10 disabled:lui-bg-transparent disabled:lui-border-ocean-light-40 disabled:lui-text-ocean-dark-10",
        ghost:
          "lui-bg-transparent lui-text-ocean-primary-10 hover:lui-bg-ocean-light-20 active:lui-bg-ocean-secondary-10 disabled:lui-bg-transparent disabled:lui-text-ocean-dark-10",
      },
      size: {
        large:
          "lui-text-base lui-min-w-40 lui-h-12 lui-px-6 lui-py-3 lui-gap-2",
        medium:
          "lui-text-sm lui-min-w-[124px] lui-h-10 lui-px-5 lui-py-[9.5px] lui-gap-2",
        small:
          "lui-text-xs lui-min-w-[110px] lui-h-8 lui-px-4 lui-py-[6px] lui-gap-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: IconType;
  rightIcon?: IconType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, leftIcon, rightIcon, variant, size, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && <Icon name={leftIcon} />}
        {children}
        {rightIcon && <Icon name={rightIcon} />}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
