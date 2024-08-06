import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors w-fit",
  {
    variants: {
      variant: {
        primary:
          "bg-ocean-primary-10 text-ocean-light-10 hover:bg-ocean-primary-20 active:bg-ocean-primary-30 disabled:bg-ocean-light-40",
        secondary:
          "bg-transparent border border-ocean-primary-10 text-ocean-primary-10 hover:bg-ocean-light-20 active:bg-ocean-secondary-10 disabled:bg-transparent disabled:border-ocean-light-40 disabled:text-ocean-dark-10",
        ghost:
          "bg-transparent text-ocean-primary-10 hover:bg-ocean-light-20 active:bg-ocean-secondary-10 disabled:bg-transparent disabled:text-ocean-dark-10",
      },
      size: {
        large: "text-base min-w-40 h-12 px-6 py-3 gap-2",
        medium: "text-sm min-w-[124px] h-10 px-5 py-[9.5px] gap-2",
        small: "text-xs min-w-[110px] h-8 px-4 py-[6px] gap-1",
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
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
