import * as React from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { MultiSelect, MultiSelectProps } from "@/components/ui/multi-select";

interface FormMultiSelect<TFieldValues extends FieldValues>
  extends Omit<MultiSelectProps, "value" | "onValueChange"> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

const FormMultiSelect = React.forwardRef(
  <TFieldValues extends FieldValues>(
    { control, name, ...props }: FormMultiSelect<TFieldValues>,
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
            <MultiSelect
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
  props: FormMultiSelect<TFieldValues> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  },
) => React.ReactElement;

export { FormMultiSelect };
