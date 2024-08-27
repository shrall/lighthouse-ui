import * as React from "react";

import { cn } from "@/lib/utils";

type InputStyle = "default" | "underline";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  container?: { className?: string };
  input?: { className?: string };
  inputStyle?: InputStyle;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  regex?: "text" | "number";
  errorMessage?: string;
  helperText?: string;
  alignment?: "vertical" | "horizontal";
  label?: string;
  tooltip?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      container,
      input,
      errorMessage,
      helperText,
      leftNode,
      inputStyle = "default",
      rightNode,
      disabled,
      onChange,
      maxLength,
      regex,
      value,
      label,
      tooltip,
      alignment = "vertical",
      ...props
    },
    ref,
  ) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (regex) {
        e.target.value = e.target.value.replace(
          regex === "text"
            ? /[^a-zA-Z0-9@#$%&*()_+=!{};:,./<>?|\-\]]/g
            : /[^0-9]/g,
          "",
        );
      }
      if (maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
      if (onChange) {
        onChange(e);
      }
    }
    return (
      <div
        className={cn(
          "lui-flex lui-items-start",
          alignment === "vertical" && "lui-flex-col lui-gap-y-2",
          alignment === "horizontal" && "lui-flex-row lui-gap-x-6",
          container && container.className,
        )}
      >
        {label && (
          <div className="lui-flex lui-w-[156px] lui-max-w-[156px] lui-items-center lui-gap-x-2">
            <label
              htmlFor={props.name}
              className="lui-text-sm lui-font-semibold lui-text-ocean-primary-10"
            >
              {label}
            </label>
            {tooltip && tooltip}
          </div>
        )}
        <div className="lui-flex lui-flex-col lui-gap-y-2">
          <div
            className={cn(
              "lui-flex lui-w-full lui-items-center lui-gap-x-2 lui-text-sm placeholder:lui-text-ocean-dark-10 focus-within:lui-border-ocean-primary-10",
              inputStyle === "default" &&
                "lui-rounded-lg lui-bg-ocean-light-20 lui-px-3 lui-py-2 lui-text-ocean-dark-30",
              inputStyle === "underline" &&
                "lui-border-b lui-border-ocean-dark-10 lui-pb-1.5 has-[svg]:lui-text-ocean-dark-10",
              inputStyle === "underline" &&
                type === "password" &&
                value &&
                "lui-text-xl lui-tracking-[10px]",
              inputStyle === "default" &&
                disabled &&
                "lui-bg-ocean-light-20 lui-text-ocean-light-40",
              inputStyle === "underline" &&
                disabled &&
                "lui-border-ocean-light-40 lui-text-ocean-light-40 has-[svg]:lui-text-ocean-light-40",
              errorMessage && "lui-border-ocean-danger-20",
              className,
            )}
          >
            {leftNode}
            <input
              type={type}
              className={cn(
                "lui-w-full lui-outline-none disabled:placeholder:lui-text-ocean-light-40",
                inputStyle === "default" &&
                  "lui-bg-ocean-light-20 focus:placeholder:lui-text-ocean-light-40",
                inputStyle === "underline" &&
                  "lui-h-6 lui-text-ocean-dark-30 disabled:lui-bg-white",
                input && input.className,
              )}
              ref={ref}
              disabled={disabled}
              {...props}
              onChange={handleChange}
              maxLength={Infinity}
              value={value}
            />
            {rightNode}
          </div>
          {(errorMessage || helperText) && (
            <span
              className={cn(
                "lui-text-xs lui-text-ocean-dark-10",
                disabled && "lui-text-ocean-light-40",
                errorMessage && "lui-text-ocean-danger-20",
              )}
            >
              {errorMessage ? errorMessage : helperText}
            </span>
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
