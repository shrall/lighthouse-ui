import * as React from "react";

import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ClockFilled } from "./icon/ClockFilled";

/**
 * Props for the TimePicker component.
 * @interface TimePickerProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 */
interface TimePickerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The current time value */
  value: string;
  /** Callback function when the time value changes */
  onValueChange: (value: string) => void;
  /** Default time value */
  defaultValue?: string;
  /** Whether to use a modal popover (not implemented in current code) */
  modalPopover?: boolean;
  /** Whether to render without a wrapper element */
  asChild?: boolean;
  /** Additional CSS class for the component */
  className?: string;
  /** Container props */
  container?: { className?: string };
  /** Error message to display */
  errorMessage?: string;
  /** Helper text to display */
  helperText?: string;
  /** Tooltip content */
  tooltip?: React.ReactNode;
  /** Whether the input is in an error state */
  isError?: boolean;
  /** Time interval in minutes for generating time options */
  interval?: 5 | 10 | 15 | 30 | 60;
  /**
   * Minimum selectable time (format: "HH:mm", e.g., "09:00")
   *
   * For dynamic ranges, you can use the addMinutes function.
   * (e.g, min={value ? addMinutes(value, 30) : "12:00"})
   *
   * This sets the minimum time to 30 minutes after the current value,
   * or to 12:00 if no value is set.
   */
  min?: string;
  /** Maximum selectable time (format: "HH:mm", e.g., "17:30") */
  max?: string;
  /** Array of disabled times or time ranges (format: "HH:mm", e.g., "09:00") */
  disabledTimes?: Array<string | { start: string; end: string }>;
  /** Whether to show the icon
   * @default true
   */
  showIcon?: boolean;
  /**
   * Custom icon
   * @default <ClockFilled className="lui-min-h-6 lui-min-w-6 lui-text-ocean-dark-10 lui-transition-all group-data-[state=open]:lui-text-ocean-primary-10" />
   */
  customIcon?: React.ReactNode;
}

export const TimePicker = React.forwardRef<HTMLButtonElement, TimePickerProps>(
  (
    {
      value,
      onValueChange,
      defaultValue = "",
      asChild = false,
      container,
      errorMessage,
      helperText,
      tooltip,
      className,
      isError,
      interval = 30,
      min,
      max,
      disabledTimes = [],
      showIcon = true,
      customIcon,
      ...props
    },
    ref,
  ) => {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(value || defaultValue);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const commandRef = React.useRef<HTMLDivElement>(null);
    const selectedItemRef = React.useRef<HTMLDivElement>(null);
    const commandListRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setInputValue(value || defaultValue);
    }, [value, defaultValue]);

    const isTimeDisabled = React.useCallback(
      (time: string) => {
        return disabledTimes.some((disabledTime) => {
          if (typeof disabledTime === "string") {
            return time === disabledTime;
          } else {
            return time >= disabledTime.start && time <= disabledTime.end;
          }
        });
      },
      [disabledTimes],
    );

    const generateTimeOptions = React.useMemo(() => {
      const options = [];
      const totalMinutes = 24 * 60;
      for (let i = 0; i < totalMinutes; i += interval) {
        const hours = Math.floor(i / 60);
        const minutes = i % 60;
        const timeValue = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

        if ((!min || timeValue >= min) && (!max || timeValue <= max)) {
          options.push({ value: timeValue, label: timeValue });
        }
      }
      return options;
    }, [interval, min, max]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\D/g, "");
      if (newValue.length <= 4) {
        setInputValue(newValue);
        if (newValue.length === 4) {
          const hours = newValue.slice(0, 2);
          const minutes = newValue.slice(2);
          let formattedTime = `${hours}:${minutes}`;

          if (min && formattedTime < min) {
            formattedTime = min;
          } else if (max && formattedTime > max) {
            formattedTime = max;
          }

          onValueChange(formattedTime);
          setInputValue(formattedTime);
          setIsPopoverOpen(false);
        } else {
          onValueChange("");
        }
      }
    };

    React.useEffect(() => {
      if (min && inputValue < min) {
        onValueChange(min);
        setInputValue(min);
      }
      if (max && inputValue > max) {
        onValueChange(max);
        setInputValue(max);
      }
    }, [min, max]);

    //NOTE - Keyboard Navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const event = new KeyboardEvent("keydown", {
          key: e.key,
          bubbles: true,
        });
        commandRef.current?.dispatchEvent(event);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selectedItem = commandRef.current?.querySelector<HTMLElement>(
          '[data-selected="true"]',
        );
        if (selectedItem) {
          selectedItem.click();
        } else {
          setIsPopoverOpen(true);
        }
      }
    };

    //NOTE - Scroll to selected item when popover is open
    React.useEffect(() => {
      if (isPopoverOpen) {
        setTimeout(() => {
          if (commandListRef.current && selectedItemRef.current) {
            selectedItemRef.current.scrollIntoView({ block: "start" });
          }
        }, 0);
      }
    }, [isPopoverOpen]);

    return (
      <div
        className={cn(
          "lui-flex lui-w-[8.125rem] lui-flex-col lui-items-start lui-gap-y-1",
          container?.className,
        )}
      >
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger
            asChild
            onClick={(e) => {
              e.preventDefault();
              if (inputRef.current) {
                inputRef.current.focus();
              }
              setIsPopoverOpen(!isPopoverOpen);
            }}
            tabIndex={-1}
          >
            <button
              ref={ref}
              className={cn(
                "lui-group lui-flex lui-w-[8.125rem] lui-items-center lui-justify-between lui-border-b lui-border-ocean-dark-10 lui-bg-white lui-pb-2 lui-text-start lui-font-bca lui-text-sm placeholder:lui-text-ocean-dark-10 data-[state=open]:lui-border-ocean-primary-10 focus:lui-outline-none",
                errorMessage && "lui-border-ocean-danger-20",
                className,
              )}
              {...props}
            >
              <div className="lui-mx-auto lui-flex lui-w-full lui-items-center lui-justify-between">
                <input
                  type="text"
                  placeholder={"hh:mm"}
                  value={inputValue}
                  onChange={handleInputChange}
                  className="lui-h-full lui-w-full lui-truncate focus:lui-outline-none disabled:lui-bg-transparent disabled:placeholder:lui-text-ocean-light-40"
                  ref={inputRef}
                  disabled={props.disabled}
                  onKeyDown={handleKeyDown}
                />
                {showIcon &&
                  (customIcon ? (
                    customIcon
                  ) : (
                    <ClockFilled
                      className={cn(
                        "lui-min-h-6 lui-min-w-6 lui-text-ocean-dark-10 lui-transition-all group-data-[state=open]:lui-text-ocean-primary-10",
                        props.disabled && "lui-text-ocean-light-40",
                      )}
                    />
                  ))}
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="lui-w-auto lui-min-w-[--radix-popover-trigger-width] lui-max-w-[--radix-popover-trigger-width] lui-p-0 lui-font-bca"
            align="start"
            onEscapeKeyDown={() => setIsPopoverOpen(false)}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command
              ref={commandRef}
              value={inputValue}
              onValueChange={onValueChange}
            >
              <CommandList
                className="lui-max-h-[256px] lui-overflow-y-auto"
                ref={commandListRef}
              >
                <CommandGroup className="lui-p-0 [&_[cmdk-group-items]]:lui-divide-y [&_[cmdk-group-items]]:lui-divide-ocean-light-30">
                  {generateTimeOptions.map((option) => {
                    const isSelected = inputValue === option.value;
                    const isDisabled = isTimeDisabled(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (!isDisabled) {
                            onValueChange(option.value);
                            setInputValue(option.value);
                            setIsPopoverOpen(false);
                          }
                        }}
                        className={cn(
                          "lui-cursor-pointer lui-items-start lui-gap-x-3 lui-px-5 lui-py-3",
                          isSelected && "!lui-bg-ocean-secondary-10",
                          isDisabled &&
                            "lui-cursor-not-allowed lui-bg-ocean-light-10",
                          !isDisabled &&
                            "data-[selected=true]:lui-bg-ocean-light-20",
                        )}
                        ref={isSelected ? selectedItemRef : undefined}
                      >
                        <span
                          className={cn(
                            "lui-text-sm lui-font-semibold lui-text-ocean-dark-20",
                            isSelected && "lui-text-ocean-primary-10",
                            isDisabled && "lui-text-ocean-light-40",
                          )}
                        >
                          {option.label}
                        </span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {(errorMessage || helperText) && (
          <span
            className={cn(
              "lui-text-xs lui-text-ocean-dark-10",
              props.disabled && "lui-text-ocean-light-40",
              errorMessage && "lui-text-ocean-danger-20",
            )}
          >
            {errorMessage ? errorMessage : helperText}
          </span>
        )}
      </div>
    );
  },
);

TimePicker.displayName = "TimePicker";

export function addMinutes(time: string, minutes: number): string {
  const [hours, mins] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, mins + minutes);
  return date.toTimeString().slice(0, 5);
}
