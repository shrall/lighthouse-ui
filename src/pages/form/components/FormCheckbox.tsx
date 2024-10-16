"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

import { cn } from "@/lib/utils";
import { CheckboxCheckedFilled } from "@/components/ui/icon/CheckboxCheckedFilled";
import { CheckboxIndeterminateFilled } from "@/components/ui/icon/CheckboxIndeterminateFilled";
import { CheckboxUncheckedOutline } from "@/components/ui/icon/CheckboxUncheckedOutline";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface CheckboxProps<TFieldValues extends FieldValues>
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: {
    text: string;
    className?: string;
  };
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

const FormCheckbox = React.forwardRef(
  <TFieldValues extends FieldValues>(
    { className, label, control, name, ...props }: CheckboxProps<TFieldValues>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange, onBlur } = field;
        return (
          <div className="lui-flex lui-items-center lui-gap-x-2">
            <CheckboxPrimitive.Root
              className={cn(
                "lui-group lui-size-5 disabled:lui-cursor-not-allowed",
                className,
              )}
              {...props}
              id={name}
              name={name}
              checked={value}
              onCheckedChange={(checked) => {
                onChange(checked);
              }}
              onBlur={onBlur}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.target.dispatchEvent(new Event("click", { bubbles: true }));
                }
              }}
              ref={(e) => {
                if (typeof ref === "function") {
                  ref(e);
                } else if (ref) {
                  ref.current = e;
                }
                field.ref(e);
              }}
            >
              <CheckboxPrimitive.Indicator asChild forceMount>
                <CheckboxUncheckedOutline
                  size={20}
                  className={
                    "lui-hidden lui-text-ocean-dark-10 group-disabled:lui-text-ocean-light-40 data-[state=unchecked]:lui-flex"
                  }
                />
              </CheckboxPrimitive.Indicator>
              <CheckboxPrimitive.Indicator asChild>
                <CheckboxCheckedFilled
                  size={20}
                  className={
                    "lui-hidden lui-text-ocean-secondary-20 group-disabled:lui-text-ocean-light-40 data-[state=checked]:lui-flex"
                  }
                />
              </CheckboxPrimitive.Indicator>
              <CheckboxPrimitive.Indicator asChild>
                <CheckboxIndeterminateFilled
                  size={20}
                  className={
                    "lui-hidden lui-text-ocean-secondary-20 group-disabled:lui-text-ocean-light-40 data-[state=indeterminate]:lui-flex"
                  }
                />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            {label && (
              <label
                htmlFor={name}
                className={cn(
                  "lui-text-xs lui-text-ocean-dark-30",
                  props.disabled && "lui-text-ocean-light-40",
                  label.className,
                )}
              >
                {label.text}
              </label>
            )}
          </div>
        );
      }}
    />
  ),
) as <TFieldValues extends FieldValues>(
  props: CheckboxProps<TFieldValues> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  },
) => React.ReactElement;

export { FormCheckbox };
