"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useImperativeHandle } from "react";

interface UseAutosizeTextAreaProps {
  textAreaRef: HTMLTextAreaElement | null;
  minHeight?: number;
  maxHeight?: number;
  triggerAutoSize: string;
}

export const useAutosizeTextArea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
}: UseAutosizeTextAreaProps) => {
  const [init, setInit] = React.useState(true);
  React.useEffect(() => {
    // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    const offsetBorder = 2;
    if (textAreaRef) {
      if (init) {
        textAreaRef.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textAreaRef.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }
      textAreaRef.style.height = `${minHeight + offsetBorder}px`;
      const scrollHeight = textAreaRef.scrollHeight;
      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      if (scrollHeight > maxHeight) {
        textAreaRef.style.height = `${maxHeight}px`;
      } else {
        textAreaRef.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [textAreaRef, triggerAutoSize]);
};

export type AutosizeTextAreaRef = {
  textArea: HTMLTextAreaElement;
  maxHeight: number;
  minHeight: number;
};

type AutosizeTextAreaProps = {
  container?: { className?: string };
  errorMessage?: string;
  helperText?: string;
  alignment?: "vertical" | "horizontal";
  label?: string;
  tooltip?: React.ReactNode;
  maxHeight?: number;
  minHeight?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<
  AutosizeTextAreaRef,
  AutosizeTextAreaProps
>(
  (
    {
      maxHeight = 105,
      minHeight = 30,
      container,
      label,
      alignment = "vertical",
      className,
      onChange,
      value,
      tooltip,
      errorMessage,
      helperText,
      disabled,
      ...props
    }: AutosizeTextAreaProps,
    ref: React.Ref<AutosizeTextAreaRef>,
  ) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [triggerAutoSize, setTriggerAutoSize] = React.useState("");

    useAutosizeTextArea({
      textAreaRef: textAreaRef.current,
      triggerAutoSize: triggerAutoSize,
      maxHeight,
      minHeight,
    });

    useImperativeHandle(ref, () => ({
      textArea: textAreaRef.current as HTMLTextAreaElement,
      focus: () => textAreaRef.current?.focus(),
      maxHeight,
      minHeight,
    }));

    React.useEffect(() => {
      setTriggerAutoSize(value as string);
    }, [props?.defaultValue, value]);

    return (
      <div
        className={cn(
          "lui-flex lui-w-full lui-items-start",
          alignment === "vertical" && "lui-flex-col lui-gap-y-2",
          alignment === "horizontal" && "lui-flex-row lui-gap-x-6",
          container && container.className,
        )}
      >
        {label && (
          <div
            className={cn(
              "lui-flex lui-items-start lui-gap-x-2",
              alignment === "horizontal" &&
                "lui-min-w-[156px] lui-max-w-[156px]",
            )}
          >
            <label
              htmlFor={props.name}
              className="lui-text-start lui-text-sm lui-font-semibold lui-text-ocean-primary-10 lui-break-anywhere"
            >
              {label}
            </label>
            {tooltip && tooltip}
          </div>
        )}
        <div className="lui-flex lui-w-full lui-flex-col lui-items-start lui-gap-y-1">
          <textarea
            {...props}
            value={value}
            ref={textAreaRef}
            className={cn(
              "lui-flex lui-w-full lui-resize-none disabled:lui-bg-transparent",
              "lui-border-b lui-border-ocean-dark-10 focus:lui-border-ocean-primary-10 disabled:lui-border-ocean-light-40",
              "lui-text-sm lui-text-ocean-dark-30 placeholder:lui-text-ocean-dark-10 disabled:lui-text-ocean-light-40 disabled:placeholder:lui-text-ocean-light-40",
              "focus-visible:lui-outline-none",
              className,
            )}
            onChange={(e) => {
              setTriggerAutoSize(e.target.value);
              onChange?.(e);
            }}
            disabled={disabled}
          />
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
Textarea.displayName = "Textarea";
