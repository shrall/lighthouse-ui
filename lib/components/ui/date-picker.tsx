"use client";

import { forwardRef, ForwardedRef, useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar, CalendarProps } from "./calendar";

interface DatePickerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverTrigger> {
  contentProps?: React.ComponentPropsWithoutRef<typeof PopoverContent>;
  calendarProps: CalendarProps;
}

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    { children, contentProps, calendarProps, ...props }: DatePickerProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (
        calendarProps.mode === "range" &&
        calendarProps.selected?.to &&
        !calendarProps.showMonthRangeToggle
      ) {
        setOpen(false);
      }
    }, [calendarProps.mode === "range" && calendarProps.selected?.to]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild ref={ref} {...props}>
          {children}
        </PopoverTrigger>
        <PopoverContent align="center" {...contentProps}>
          <Calendar {...calendarProps} />
        </PopoverContent>
      </Popover>
    );
  },
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
