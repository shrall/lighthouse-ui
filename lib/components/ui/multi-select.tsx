import * as React from "react";
import { matchSorter } from "match-sorter";

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
import { Checkbox } from "./checkbox";
import { ChevronDownOutline } from "./icon/ChevronDownOutline";
import { LoadingFilled } from "./icon/LoadingFilled";

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  locale?: "en" | "id";
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
  container?: { className?: string };
  errorMessage?: string;
  helperText?: string;
  alignment?: "vertical" | "horizontal";
  label?: string;
  tooltip?: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  refetch?: () => void;
  search?: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
  infiniteScroll?: {
    fetchMore: () => void;
    hasMore: boolean;
  };
}

export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      locale = "en",
      options,
      onValueChange,
      defaultValue = [],
      placeholder = "",
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      showSelectAll = true,
      container,
      errorMessage,
      helperText,
      alignment = "vertical",
      label,
      tooltip,
      isLoading,
      isError,
      refetch = () => {},
      search,
      infiniteScroll,
      ...props
    },
    ref,
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [inputFilter, setInputFilter] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);
    const commandRef = React.useRef<HTMLDivElement>(null);

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

    //NOTE - Infinite Scroll
    const observer = React.useRef<IntersectionObserver>();

    const observerRef = React.useCallback(
      (element: HTMLElement | null) => {
        // When isLoading is true, this callback will do nothing.
        // It means that the next function will never be called.
        // It is safe because the intersection observer has disconnected the previous element.
        if (isLoading) return;

        if (observer.current) observer.current.disconnect();
        if (!element) return;

        // Create a new IntersectionObserver instance because hasMore or next may be changed.
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && infiniteScroll?.hasMore) {
            infiniteScroll.fetchMore();
          }
        });
        observer.current.observe(element);
      },
      [isLoading, infiniteScroll?.hasMore, infiniteScroll?.fetchMore],
    );

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
          inputRef.current?.focus();
        } else {
          setIsPopoverOpen(true);
        }
      } else if (
        e.key === "Backspace" &&
        (search ? search.query === "" : inputFilter === "")
      ) {
        setSelectedValues((prev) => prev.slice(0, -1));
      }
    };

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
              htmlFor={props.id}
              className="lui-text-start lui-text-sm lui-font-semibold lui-text-ocean-primary-10 lui-break-anywhere"
            >
              {label}
            </label>
            {tooltip && tooltip}
          </div>
        )}
        <div className="lui-flex lui-w-full lui-flex-col lui-items-start lui-gap-y-1">
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
                setIsPopoverOpen(!isPopoverOpen);
              }}
              tabIndex={-1}
            >
              <button
                ref={ref}
                {...props}
                className={cn(
                  "lui-group lui-flex lui-w-full lui-items-center lui-justify-between lui-border-b lui-border-ocean-dark-10 lui-bg-white lui-pb-2 lui-text-start lui-font-bca lui-text-sm placeholder:lui-text-ocean-dark-10 focus:lui-outline-none data-[state=open]:lui-border-ocean-primary-10",
                  errorMessage && "lui-border-ocean-danger-20",
                  className,
                )}
              >
                <div className="lui-flex lui-w-full lui-items-center lui-justify-between">
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
                          disabled={props.disabled}
                        >
                          {option?.label}
                        </Chip>
                      );
                    })}
                    {selectedValues.length > maxCount && (
                      <Chip
                        variant="inactive"
                        size="small"
                        className="lui-border lui-border-ocean-dark-20 aria-disabled:lui-border-transparent"
                        disabled={props.disabled}
                      >
                        {`${selectedValues.length - maxCount} more`}
                      </Chip>
                    )}
                    <input
                      type="text"
                      placeholder={placeholder}
                      value={search ? search.query : inputFilter}
                      onChange={(e) => {
                        if (search) {
                          search.setQuery(e.target.value);
                        } else {
                          setInputFilter(e.target.value);
                        }
                      }}
                      onKeyDown={handleKeyDown}
                      className="focus:lui-outline-none disabled:lui-bg-transparent disabled:placeholder:lui-text-ocean-light-40"
                      ref={inputRef}
                      disabled={props.disabled}
                    />
                  </div>
                  <ChevronDownOutline
                    className={cn(
                      "lui-ml-auto lui-min-h-6 lui-min-w-6 lui-text-ocean-primary-10 lui-transition-all group-data-[state=open]:lui-rotate-180",
                      props.disabled && "lui-text-ocean-light-40",
                    )}
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
              <Command ref={commandRef}>
                <CommandList className="lui-max-h-[256px]">
                  {isError && !isLoading ? (
                    <div className="p-4 lui-flex lui-h-full lui-w-full lui-flex-col lui-items-center lui-justify-center lui-gap-y-2 lui-bg-white lui-py-5">
                      <div>
                        {locale === "en"
                          ? "Failed to load data"
                          : "Gagal memuat data"}
                      </div>
                      <div
                        className="lui-cursor-pointer lui-text-xs lui-font-semibold lui-text-ocean-primary-10 hover:lui-text-ocean-primary-30"
                        onClick={() => {
                          refetch();
                        }}
                      >
                        {locale === "en" ? "Reload Data" : "Muat Ulang"}
                      </div>
                    </div>
                  ) : (
                    !isError &&
                    options.length > 0 && (
                      <>
                        <CommandEmpty>
                          {locale === "en"
                            ? "No results found"
                            : "Data tidak ditemukan"}
                        </CommandEmpty>
                        <CommandGroup className="lui-p-0 [&_[cmdk-group-items]]:lui-divide-y [&_[cmdk-group-items]]:lui-divide-ocean-light-30">
                          {showSelectAll &&
                            (search
                              ? search.query === ""
                              : inputFilter === "") && (
                              <CommandItem
                                key="all"
                                onSelect={toggleAll}
                                className={cn(
                                  "lui-cursor-pointer lui-items-start lui-gap-x-3 lui-px-5 lui-py-3 data-[selected=true]:lui-bg-ocean-light-20",
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
                                <span>
                                  (
                                  {locale === "en"
                                    ? "Select All"
                                    : "Pilih Semua"}
                                  )
                                </span>
                              </CommandItem>
                            )}
                          {matchSorter(
                            options,
                            search ? search.query : inputFilter,
                            {
                              keys: ["label", "description"],
                              threshold: matchSorter.rankings.CONTAINS,
                            },
                          ).map((option) => {
                            const isSelected = selectedValues.includes(
                              option.value,
                            );
                            return (
                              <CommandItem
                                key={option.value}
                                onSelect={() => toggleOption(option.value)}
                                className={cn(
                                  "lui-cursor-pointer lui-items-start lui-gap-x-3 lui-px-5 lui-py-3 data-[selected=true]:lui-bg-ocean-light-20",
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
                      </>
                    )
                  )}
                  {(isLoading || infiniteScroll?.hasMore) && (
                    <div
                      ref={infiniteScroll?.hasMore ? observerRef : null}
                      className="p-4 lui-flex lui-h-full lui-w-full lui-items-center lui-justify-center lui-bg-white lui-py-5"
                    >
                      <LoadingFilled className="lui-animate-spin lui-text-ocean-secondary-30" />
                    </div>
                  )}
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
      </div>
    );
  },
);

MultiSelect.displayName = "MultiSelect";
