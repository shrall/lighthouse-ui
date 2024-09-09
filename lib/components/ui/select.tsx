import * as React from "react";

import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icon } from "./icon";

interface SelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: {
    label: string;
    description?: string;
    value: string;
  }[];

  onValueChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  maxCount?: number;
  modalPopover?: boolean;
  asChild?: boolean;
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      onValueChange,
      defaultValue = "",
      placeholder = "Select options",
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [selectedValue, setSelectedValue] =
      React.useState<string>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [inputFilter, setInputFilter] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <PopoverTrigger
          asChild
          onClick={(e) => {
            e.preventDefault();
            if (inputRef.current) {
              inputRef.current.focus();
            }
            setIsPopoverOpen(true);
          }}
        >
          <button
            ref={ref}
            {...props}
            className={cn(
              "lui-group lui-flex lui-w-full lui-items-center lui-justify-between lui-border-b lui-border-ocean-dark-10 lui-bg-white lui-pb-2 lui-text-start lui-font-bca lui-text-sm placeholder:lui-text-ocean-dark-10 focus:lui-outline-none data-[state=open]:lui-border-ocean-primary-10",
              className,
            )}
          >
            <div className="lui-mx-auto lui-flex lui-w-full lui-items-center lui-justify-between">
              <input
                type="text"
                placeholder={placeholder}
                value={inputFilter}
                onChange={(e) => {
                  setSelectedValue("");
                  setInputFilter(e.target.value);
                }}
                className="lui-h-full lui-w-full lui-truncate focus:lui-outline-none"
                ref={inputRef}
              />
              <Icon
                name="chevron-down-outline"
                className="lui-min-h-6 lui-min-w-6 lui-text-ocean-dark-10 lui-transition-all group-data-[state=open]:lui-rotate-180 group-data-[state=open]:lui-text-ocean-primary-10"
              />
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="lui-w-auto lui-min-w-[--radix-popover-trigger-width] lui-max-w-[--radix-popover-trigger-width] lui-p-0 lui-font-bca"
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Command>
            <CommandList className="lui-max-h-[282px]">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="lui-p-0 [&_[cmdk-group-items]]:lui-divide-y [&_[cmdk-group-items]]:lui-divide-ocean-light-30">
                {options
                  .filter((option) =>
                    selectedValue
                      ? true
                      : option.label
                          .toLowerCase()
                          .includes(inputFilter.toLowerCase()),
                  )
                  .map((option) => {
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (selectedValue === option.value) {
                            setSelectedValue("");
                            setInputFilter("");
                            onValueChange("");
                            return;
                          }
                          setInputFilter(
                            `${option.label} - ${option.description}`,
                          );
                          setSelectedValue(option.value);
                        }}
                        className={cn(
                          "lui-cursor-pointer lui-items-start lui-gap-x-3 lui-px-5 lui-py-3 hover:lui-bg-ocean-light-20",
                          selectedValue === option.value &&
                            "!lui-bg-ocean-secondary-10",
                        )}
                      >
                        <div className="lui-flex lui-w-full lui-min-w-0 lui-flex-col lui-gap-y-1 lui-text-start">
                          <span className="lui-text-sm lui-font-semibold lui-text-ocean-dark-20">
                            {option.label}
                          </span>
                          {option.description && (
                            <p className="lui-truncate lui-text-xs lui-text-ocean-dark-10">
                              {option.description}
                            </p>
                          )}
                        </div>
                      </CommandItem>
                    );
                  })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

Select.displayName = "Select";
