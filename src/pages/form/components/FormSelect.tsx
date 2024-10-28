import * as React from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Select, SelectProps } from "@/components/ui/select";

interface FormSelectProps<TFieldValues extends FieldValues>
  extends Omit<SelectProps, "value" | "onValueChange"> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

const FormSelect = React.forwardRef(
  <TFieldValues extends FieldValues>(
    { control, name, ...props }: FormSelectProps<TFieldValues>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const errorMessage = fieldState.error?.message;
          const { onChange, onBlur, disabled } = field;

          return (
            <Select
              {...props}
              {...field}
              onValueChange={onChange}
              onBlur={onBlur}
              disabled={disabled || props.disabled}
              errorMessage={errorMessage}
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
    );
  },
) as <TFieldValues extends FieldValues>(
  props: FormSelectProps<TFieldValues> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  },
) => React.ReactElement;

export { FormSelect };
