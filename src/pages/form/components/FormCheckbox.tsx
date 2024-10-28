"use client";

import * as React from "react";

import { Checkbox, CheckboxProps } from "@/components/ui/checkbox";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormCheckboxProps<TFieldValues extends FieldValues>
  extends CheckboxProps {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

const FormCheckbox = React.forwardRef(
  <TFieldValues extends FieldValues>(
    { control, name, ...props }: FormCheckboxProps<TFieldValues>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange, onBlur, disabled } = field;
        return (
          <Checkbox
            {...props}
            name={name}
            checked={value}
            onCheckedChange={(checked) => {
              onChange(checked);
            }}
            onBlur={onBlur}
            disabled={disabled || props.disabled}
            ref={(e) => {
              if (typeof ref === "function") {
                ref(e);
              } else if (ref) {
                ref.current = e;
              }
              field.ref(e);
            }}
          />
        );
      }}
    />
  ),
) as <TFieldValues extends FieldValues>(
  props: FormCheckboxProps<TFieldValues> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  },
) => React.ReactElement;

export { FormCheckbox };
