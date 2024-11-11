import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "lui-inline-flex lui-items-center lui-justify-center lui-transition-colors lui-w-fit",
  {
    variants: {
      variant: {
        primary:
          "lui-bg-ocean-primary-10 lui-text-ocean-light-10 hover:lui-bg-ocean-primary-20 active:lui-bg-ocean-primary-30 disabled:lui-bg-ocean-light-40",
        secondary:
          "lui-bg-transparent lui-border lui-border-ocean-primary-10 lui-text-ocean-primary-10 hover:lui-bg-ocean-light-20 active:lui-bg-ocean-secondary-10 disabled:lui-bg-transparent disabled:lui-border-ocean-light-40 disabled:lui-text-ocean-dark-10",
        ghost:
          "lui-bg-transparent lui-text-ocean-primary-10 hover:lui-bg-ocean-light-20 active:lui-bg-ocean-secondary-10 disabled:lui-bg-transparent disabled:lui-text-ocean-dark-10",
        inversed:
          "lui-bg-ocean-light-10 lui-text-ocean-primary-30 hover:lui-bg-ocean-secondary-20 hover:lui-text-ocean-light-10 active:lui-bg-ocean-secondary-30 disabled:lui-text-ocean-dark-10 disabled:lui-bg-transparent",
        link: "lui-bg-transparent lui-text-ocean-primary-10 hover:lui-underline disabled:lui-text-ocean-dark-10 disabled:lui-no-underline",
      },
      size: {
        large:
          "lui-text-base lui-min-w-40 lui-min-h-12 lui-px-6 lui-py-3 lui-gap-2 lui-rounded-3xl [&>svg]:lui-min-w-6 [&>svg]:lui-w-6 [&>svg]:lui-min-h-6 [&>svg]:lui-h-6",
        medium:
          "lui-text-sm lui-min-w-[124px] lui-min-h-10 lui-px-5 lui-py-[9.5px] lui-gap-2 lui-rounded-[20px] [&>svg]:lui-min-w-5 [&>svg]:lui-w-5 [&>svg]:lui-min-h-5 [&>svg]:lui-h-5",
        small:
          "lui-text-xs lui-min-w-[110px] lui-min-h-8 lui-px-4 lui-py-[6px] lui-gap-1 lui-rounded-2xl [&>svg]:lui-min-w-4 [&>svg]:lui-w-4 [&>svg]:lui-min-h-4 [&>svg]:lui-h-4",
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
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  textProps?: React.HTMLAttributes<HTMLSpanElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      leftNode,
      rightNode,
      variant,
      size,
      type = "button",
      children,
      textProps,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {leftNode && leftNode}
        <span
          {...textProps}
          className={cn("lui-break-anywhere", textProps?.className)}
        >
          {children}
        </span>
        {rightNode && rightNode}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
