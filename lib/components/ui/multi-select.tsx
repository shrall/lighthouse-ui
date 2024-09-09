import * as React from "react";

import { cn } from "@/lib/utils";
import { Chip } from "./chip";
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
import { Checkbox } from "./checkbox";

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: {
    label: string;
    description?: string;
    value: string;
  }[];

  onValueChange: (value: string[]) => void;
  defaultValue: string[];
  placeholder?: string;
  maxCount?: number;
  modalPopover?: boolean;
  asChild?: boolean;
  className?: string;
  showSelectAll?: boolean;
}

export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      defaultValue = [],
      placeholder = "Select options",
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      showSelectAll = true,
      ...props
    },
    ref,
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [inputFilter, setInputFilter] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      setSelectedValues(defaultValue);
    }, [defaultValue]);

    const toggleOption = (value: string) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option.value);
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };

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
            {selectedValues.length > 0 ? (
              <div className="lui-flex lui-w-full lui-items-center lui-justify-between">
                <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
                  <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
                    {selectedValues.slice(0, maxCount).map((value) => {
                      const option = options.find((o) => o.value === value);
                      return (
                        <Chip
                          key={value}
                          removeOnClick={(e) => {
                            e.stopPropagation();
                            toggleOption(value);
                          }}
                          variant="secondary"
                          size="small"
                        >
                          {option?.label}
                        </Chip>
                      );
                    })}
                    {selectedValues.length > maxCount && (
                      <Chip
                        variant="inactive"
                        size="small"
                        className="lui-border lui-border-ocean-dark-20"
                      >
                        {`${selectedValues.length - maxCount} more`}
                      </Chip>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={inputFilter}
                    onChange={(e) => {
                      setInputFilter(e.target.value);
                    }}
                    className="focus:lui-outline-none"
                    ref={inputRef}
                  />
                </div>
                <Icon
                  name="chevron-down-outline"
                  className="lui-ml-auto lui-min-h-6 lui-min-w-6 lui-text-ocean-dark-10 lui-transition-all group-data-[state=open]:lui-rotate-180 group-data-[state=open]:lui-text-ocean-primary-10"
                />
              </div>
            ) : (
              <div className="lui-mx-auto lui-flex lui-w-full lui-items-center lui-justify-between">
                <input
                  type="text"
                  placeholder={placeholder}
                  value={inputFilter}
                  onChange={(e) => {
                    setInputFilter(e.target.value);
                  }}
                  className="lui-h-full lui-w-full focus:lui-outline-none"
                  ref={inputRef}
                />
                <Icon
                  name="chevron-down-outline"
                  className="lui-min-h-6 lui-min-w-6 lui-text-ocean-dark-10 lui-transition-all group-data-[state=open]:lui-rotate-180 group-data-[state=open]:lui-text-ocean-primary-10"
                />
              </div>
            )}
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
                {showSelectAll && (
                  <CommandItem
                    key="all"
                    onSelect={toggleAll}
                    className={cn(
                      "lui-cursor-pointer lui-items-start lui-gap-x-3 lui-px-5 lui-py-3 hover:lui-bg-ocean-light-20",
                      selectedValues.length === options.length &&
                        "!lui-bg-ocean-secondary-10",
                    )}
                  >
                    <Checkbox
                      checked={
                        selectedValues.length === options.length
                          ? true
                          : selectedValues.length === 0
                            ? false
                            : "indeterminate"
                      }
                    />
                    <span>(Select All)</span>
                  </CommandItem>
                )}
                {options
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(inputFilter.toLowerCase()),
                  )
                  .map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleOption(option.value)}
                        className={cn(
                          "lui-cursor-pointer lui-items-start lui-gap-x-3 lui-px-5 lui-py-3 hover:lui-bg-ocean-light-20",
                          isSelected && "!lui-bg-ocean-secondary-10",
                        )}
                      >
                        <Checkbox checked={isSelected ? true : false} />
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

MultiSelect.displayName = "MultiSelect";
