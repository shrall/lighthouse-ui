import * as React from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input, InputProps } from "@/components/ui/input";

export interface FormInputProps<TFieldValues extends FieldValues>
  extends InputProps {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

const FormInput = React.forwardRef(
  <TFieldValues extends FieldValues>(
    {
      className,
      type,
      container,
      helperText,
      leftNode,
      inputStyle = "underline",
      rightNode,
      disabled,
      maxLength,
      regex,
      value,
      label,
      tooltip,
      alignment = "vertical",
      control,
      name,
      ...props
    }: FormInputProps<TFieldValues>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (regex) {
        e.target.value = e.target.value.replace(
          regex.type === "custom" && regex.pattern
            ? regex.pattern
            : regex.type === "number"
              ? /[^0-9]/g
              : "",
          "",
        );
      }
      if (maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
      return e.target.value;
    }

    return (
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const errorMessage = fieldState.error?.message;

          return (
            <Input
              {...props}
              {...field}
              ref={(e) => {
                if (typeof ref === "function") {
                  ref(e);
                } else if (ref) {
                  ref.current = e;
                }
                field.ref(e);
              }}
              onChange={(e) => {
                field.onChange(handleChange(e));
              }}
              errorMessage={errorMessage}
            />
          );
        }}
      />
    );
  },
) as <TFieldValues extends FieldValues>(
  props: FormInputProps<TFieldValues> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  },
) => React.ReactElement;

export { FormInput };
