"use client";

import {
  DateRange,
  DayPicker,
  Matcher,
  useDayPicker,
  type DayPickerProps,
} from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./button";
import { ChevronLeftOutline } from "./icon/ChevronLeftOutline";
import { ChevronRightOutline } from "./icon/ChevronRightOutline";
import { useEffect, useRef, useState } from "react";
import { addYears, format } from "date-fns";
import { Separator } from "./separator";
import { Alert, AlertProps } from "./alert";
import { enUS } from "date-fns/locale";
import { getYearRange, isMonthDisabled, isYearDisabled } from "@/lib/calendar";

type Shortcut = {
  label: string;
  range: DateRange;
};

export type CalendarProps = DayPickerProps & {
  disabled?: Matcher[];
  size?: "medium" | "large";
  alert?: AlertProps;
  shortcuts?: Shortcut[];
  showMonthRangeToggle?: boolean;
} & (
    | { shortcuts?: Shortcut[]; showMonthRangeToggle?: never }
    | { shortcuts?: never; showMonthRangeToggle?: boolean }
  );

function Calendar({
  className,
  classNames,
  locale = enUS,
  showOutsideDays = true,
  shortcuts,
  size = "large",
  alert,
  showMonthRangeToggle = false,
  ...calendarProps
}: CalendarProps) {
  const [rangeType, setRangeType] = useState<"daily" | "monthly">("daily");
  const [content, setContent] = useState<"date" | "month" | "year">("date");
  const [shortcutButtonPosition, setShortcutButtonPosition] =
    useState<number>(0);
  const shortcutContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shortcutButtonPosition) {
      shortcutContainerRef.current?.scrollTo({
        left: shortcutButtonPosition,
        behavior: "instant",
      });
    }
  }, [shortcutButtonPosition]);

  useEffect(() => {
    const div = shortcutContainerRef.current;
    if (div) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        div.scrollLeft += e.deltaY;
      };
      div.addEventListener("wheel", handleWheel, { passive: false });
      return () => div.removeEventListener("wheel", handleWheel);
    }
  }, [calendarProps]);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("lui-p-4", className)}
      classNames={{
        month: "lui-w-[19rem] lui-min-w-[19rem] lui-max-w-[19rem]",
        caption_label: "lui-text-sm lui-font-medium",
        month_grid: "lui-w-full",
        weekdays: "lui-flex lui-gap-x-1 lui-text-ocean-dark-10",
        weekday:
          "lui-size-10 lui-text-sm lui-font-semibold lui-flex lui-items-center lui-justify-center",
        weeks: "",
        week: "lui-flex lui-mt-2 lui-gap-x-1",
        day: "lui-p-0",
        ...classNames,
      }}
      components={{
        Months({ ...props }) {
          const { goToMonth } = useDayPicker();
          return (
            <div
              className={cn(
                "lui-flex lui-max-w-[27.5rem] lui-flex-col lui-gap-y-3",
                shortcuts || showMonthRangeToggle
                  ? "lui-max-w-[27.5rem]"
                  : "lui-max-w-[19rem]",
              )}
            >
              <div
                className={cn(
                  "lui-flex lui-gap-x-4",
                  size === "medium" && "lui-flex-col lui-gap-y-3",
                )}
              >
                <div
                  ref={shortcutContainerRef}
                  className={cn(
                    "lui-flex lui-w-full lui-gap-2",
                    size === "large" &&
                      "lui-w-[7.5rem] lui-max-w-[7.5rem] lui-flex-col",
                    size === "medium" &&
                      "lui-w-[19rem] lui-min-w-[19rem] lui-max-w-[19rem] lui-overflow-x-scroll lui-scrollbar-w-none",
                  )}
                >
                  {shortcuts &&
                    shortcuts.map((shortcut) => {
                      const buttonRef = useRef<HTMLButtonElement>(null);
                      return (
                        <Button
                          ref={buttonRef}
                          key={shortcut.label}
                          variant="ghost"
                          className={cn(
                            "lui-w-full lui-min-w-fit",
                            size === "large" && "lui-px-4",
                            size === "medium" &&
                              "lui-bg-ocean-light-30 lui-px-3 lui-py-[0.625rem] lui-text-ocean-dark-20",
                            calendarProps.mode === "range" &&
                              calendarProps.selected?.from?.getDate() ===
                                shortcut.range.from?.getDate() &&
                              calendarProps.selected?.to?.getDate() ===
                                shortcut.range.to?.getDate() &&
                              "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
                          )}
                          textProps={{
                            className: "lui-line-clamp-1",
                          }}
                          onClick={(e) => {
                            if (calendarProps.mode === "range") {
                              calendarProps.onSelect?.(
                                shortcut.range,
                                shortcut.range.from ?? new Date(),
                                {},
                                e,
                              );
                              goToMonth(shortcut.range.from ?? new Date());
                              setShortcutButtonPosition(
                                buttonRef.current?.offsetLeft
                                  ? buttonRef.current.offsetLeft - 466
                                  : 0,
                              );
                            }
                          }}
                        >
                          {shortcut.label}
                        </Button>
                      );
                    })}
                  {showMonthRangeToggle && (
                    <>
                      <Button
                        variant="ghost"
                        className={cn(
                          "lui-w-full lui-min-w-fit",
                          size === "large" && "lui-px-4",
                          size === "medium" &&
                            "lui-bg-ocean-light-30 lui-px-3 lui-py-[0.625rem] lui-text-ocean-dark-20",
                          rangeType === "daily" &&
                            "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
                        )}
                        textProps={{
                          className: "lui-line-clamp-1",
                        }}
                        onClick={(e) => {
                          setContent("date");
                          setRangeType("daily");
                          if (calendarProps.mode === "range") {
                            calendarProps.onSelect?.(
                              { from: undefined, to: undefined },
                              new Date(),
                              {},
                              e,
                            );
                          }
                        }}
                      >
                        {locale === enUS ? "Daily" : "Harian"}
                      </Button>
                      <Button
                        variant="ghost"
                        className={cn(
                          "lui-w-full lui-min-w-fit",
                          size === "large" && "lui-px-4",
                          size === "medium" &&
                            "lui-bg-ocean-light-30 lui-px-3 lui-py-[0.625rem] lui-text-ocean-dark-20",
                          rangeType === "monthly" &&
                            "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
                        )}
                        onClick={(e) => {
                          setContent("month");
                          setRangeType("monthly");
                          if (calendarProps.mode === "range") {
                            calendarProps.onSelect?.(
                              { from: undefined, to: undefined },
                              new Date(),
                              {},
                              e,
                            );
                          }
                        }}
                      >
                        {locale === enUS ? "Monthly" : "Bulanan"}
                      </Button>
                    </>
                  )}
                </div>
                {size === "medium" && (
                  <Separator className="lui-bg-ocean-light-30" />
                )}
                <div {...props} />
              </div>
              {alert && <Alert {...alert} />}
            </div>
          );
        },
        MonthGrid({ ...props }) {
          const { select, months, goToMonth } = useDayPicker<{
            mode: "range";
          }>();
          if (content === "date") {
            return <table {...props} />;
          } else if (content === "month") {
            return (
              <div className="lui-grid lui-grid-cols-3 lui-gap-x-1 lui-gap-y-4">
                {Array.from({ length: 12 }, (_, i) => i).map((month) => {
                  const isDisabled = isMonthDisabled(
                    month,
                    months[0].date.getFullYear(),
                    calendarProps.disabled,
                  );
                  return (
                    <Button
                      key={month}
                      variant="ghost"
                      disabled={isDisabled}
                      className={cn(
                        //NOTE - Set month button as selected if the from date is in the same month & year
                        rangeType === "daily" &&
                          calendarProps.mode === "range" &&
                          calendarProps.selected?.from?.getMonth() === month &&
                          calendarProps.selected?.from?.getFullYear() ===
                            months[0].date.getFullYear() &&
                          buttonVariants({ variant: "primary" }),
                        //NOTE - Set month button as selected in the mid range when the month is in the range of the selected dates
                        rangeType === "monthly" &&
                          calendarProps.mode === "range" &&
                          calendarProps.selected &&
                          calendarProps.selected.from &&
                          calendarProps.selected.to &&
                          calendarProps.selected.from <=
                            new Date(months[0].date.getFullYear(), month) &&
                          calendarProps.selected.to >=
                            new Date(months[0].date.getFullYear(), month) &&
                          "lui-border lui-border-ocean-primary-10 lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
                        //NOTE - Set month button as selected if the to date is in the same month & year as the from & to dates
                        rangeType === "monthly" &&
                          calendarProps.mode === "range" &&
                          calendarProps.selected &&
                          calendarProps.selected.from &&
                          calendarProps.selected.to &&
                          ((calendarProps.selected.from.getMonth() === month &&
                            calendarProps.selected.from.getFullYear() ===
                              months[0].date.getFullYear()) ||
                            (calendarProps.selected.to.getMonth() === month &&
                              calendarProps.selected.to.getFullYear() ===
                                months[0].date.getFullYear())) &&
                          buttonVariants({ variant: "primary" }),
                        "lui-w-full lui-min-w-fit lui-p-0 lui-text-sm",
                      )}
                      onClick={(e) => {
                        if (rangeType === "daily") {
                          const newDate = new Date(
                            months[0].date.getFullYear(),
                            month,
                            1,
                          );
                          goToMonth(newDate);
                          setContent("date");
                        } else {
                          if (calendarProps.mode === "range") {
                            //NOTE - If it's fresh or the from is greater than the first day of the month
                            //NOTE - Select the first day of the month
                            !calendarProps.selected?.from ||
                            calendarProps.selected?.from >
                              new Date(months[0].date.getFullYear(), month, 1)
                              ? select?.(
                                  new Date(
                                    months[0].date.getFullYear(),
                                    month,
                                    1,
                                  ),
                                  {},
                                  e,
                                )
                              : // NOTE - If the to is in the same month
                                // NOTE - Select the first day of the month and the last day of the month
                                calendarProps.selected.to &&
                                  calendarProps.selected.to.getMonth() === month
                                ? calendarProps.onSelect?.(
                                    {
                                      from: new Date(
                                        months[0].date.getFullYear(),
                                        month,
                                        1,
                                      ),
                                      to: new Date(
                                        months[0].date.getFullYear(),
                                        month,
                                        new Date(
                                          months[0].date.getFullYear(),
                                          month + 1,
                                          0,
                                        ).getDate(),
                                      ),
                                    },
                                    new Date(
                                      months[0].date.getFullYear(),
                                      month,
                                      new Date(
                                        months[0].date.getFullYear(),
                                        month + 1,
                                        0,
                                      ).getDate(),
                                    ),
                                    {},
                                    e,
                                  )
                                : // NOTE - Select the last day of the month
                                  select?.(
                                    new Date(
                                      months[0].date.getFullYear(),
                                      month,
                                      new Date(
                                        months[0].date.getFullYear(),
                                        month + 1,
                                        0,
                                      ).getDate(),
                                    ),
                                    {},
                                    e,
                                  );
                          }
                        }
                      }}
                    >
                      {format(new Date(0, month), "MMMM", {
                        locale: {
                          localize: locale.localize ?? enUS.localize,
                          formatLong: locale.formatLong ?? enUS.formatLong,
                          options: locale.options ?? enUS.options,
                        },
                      })}
                    </Button>
                  );
                })}
              </div>
            );
          } else {
            const startYear =
              Math.floor(months[0].date.getFullYear() / 12) * 12;
            return (
              <div className="lui-grid lui-grid-cols-3 lui-gap-x-1 lui-gap-y-4">
                {Array.from({ length: 12 }, (_, i) => i).map((year) => {
                  const isDisabled = isYearDisabled(
                    startYear + year,
                    calendarProps.disabled,
                  );
                  return (
                    <Button
                      key={year}
                      variant="ghost"
                      disabled={isDisabled}
                      className={cn(
                        //NOTE - Set year button as selected if the from date is in the same year
                        rangeType === "daily" &&
                          calendarProps.mode === "range" &&
                          calendarProps.selected?.from?.getFullYear() ===
                            startYear + year &&
                          buttonVariants({ variant: "primary" }),
                        "lui-w-full lui-min-w-fit lui-p-0 lui-text-sm",
                      )}
                      onClick={() => {
                        const newDate = new Date(startYear + year, 0, 1);
                        goToMonth(newDate);
                        setContent("month");
                      }}
                    >
                      {startYear + year}
                    </Button>
                  );
                })}
              </div>
            );
          }
        },
        DayButton({ day, modifiers, className, ...buttonProps }) {
          return (
            <Button
              variant={modifiers.selected ? "primary" : "ghost"}
              className={cn(
                className,
                "lui-size-10 lui-min-w-fit lui-p-0 lui-font-semibold disabled:lui-text-ocean-light-40",
                modifiers.range_middle &&
                  "lui-border lui-border-ocean-primary-10 lui-bg-ocean-secondary-10 lui-text-ocean-primary-10 hover:lui-text-white",
                (modifiers.range_start ||
                  modifiers.range_middle ||
                  modifiers.range_end) &&
                  "disabled:lui-border disabled:lui-border-solid disabled:lui-border-ocean-dark-10 disabled:lui-bg-ocean-light-30 disabled:lui-text-ocean-dark-10",
                modifiers?.outside &&
                  "lui-pointer-events-none lui-border-none lui-bg-transparent lui-text-ocean-light-40 disabled:lui-border-none disabled:lui-bg-transparent disabled:lui-text-ocean-light-40",
              )}
              {...buttonProps}
              aria-selected={modifiers.selected || buttonProps["aria-selected"]}
              aria-disabled={modifiers.disabled || buttonProps["aria-disabled"]}
              aria-hidden={modifiers.hidden || buttonProps["aria-hidden"]}
            />
          );
        },
        MonthCaption(props) {
          const { goToMonth, nextMonth, previousMonth } = useDayPicker();
          return (
            <div className="lui-mb-1 lui-flex lui-items-center lui-justify-between lui-font-semibold">
              <Button
                variant="ghost"
                className="lui-w-fit lui-min-w-fit lui-p-2"
                onClick={() => {
                  if (content === "date") {
                    previousMonth && goToMonth(previousMonth);
                  } else if (content === "month") {
                    goToMonth(addYears(props.calendarMonth.date, -1));
                  } else if (content === "year") {
                    goToMonth(addYears(props.calendarMonth.date, -12));
                  }
                }}
              >
                <ChevronLeftOutline className="lui-size-6" />
              </Button>
              {content === "date" && (
                <Button
                  variant="ghost"
                  className="lui-w-fit lui-min-w-fit"
                  onClick={() => {
                    setContent("month");
                  }}
                >
                  {format(props.calendarMonth.date, "MMMM", {
                    locale: {
                      localize: locale.localize ?? enUS.localize,
                      formatLong: locale.formatLong ?? enUS.formatLong,
                      options: locale.options ?? enUS.options,
                    },
                  })}
                </Button>
              )}
              {(content === "date" || content === "month") && (
                <Button
                  variant="ghost"
                  className="lui-w-fit lui-min-w-fit"
                  onClick={() => {
                    setContent("year");
                  }}
                >
                  {props.calendarMonth.date.getFullYear()}
                </Button>
              )}
              {content === "year" && (
                <Button
                  variant="ghost"
                  className="lui-w-fit lui-min-w-fit"
                  onClick={() => {
                    setContent("month");
                  }}
                >
                  {getYearRange(props.calendarMonth.date.getFullYear())}
                </Button>
              )}
              <Button
                variant="ghost"
                className="lui-w-fit lui-min-w-fit lui-p-2"
                onClick={() => {
                  if (content === "date") {
                    nextMonth && goToMonth(nextMonth);
                  } else if (content === "month") {
                    goToMonth(addYears(props.calendarMonth.date, 1));
                  } else if (content === "year") {
                    goToMonth(addYears(props.calendarMonth.date, 12));
                  }
                }}
              >
                <ChevronRightOutline className="lui-size-6" />
              </Button>
            </div>
          );
        },
        Nav() {
          return <></>;
        },
      }}
      {...calendarProps}
      onDayClick={(date, modifiers, e) => {
        if (
          //NOTE - If nothing is selected yet
          (calendarProps.mode === "range" &&
            calendarProps.selected?.from !== undefined &&
            calendarProps.selected?.to !== undefined) ||
          //NOTE - If the date is less than the from date
          (calendarProps.mode === "range" &&
            calendarProps.selected?.from &&
            date < calendarProps.selected?.from) ||
          //NOTE - If nothing is selected yet
          (calendarProps.mode === "range" && !calendarProps.selected)
        ) {
          //NOTE - Select the date as the from date
          calendarProps.onSelect?.(
            { from: date, to: undefined },
            date,
            modifiers,
            e,
          );
        } else if (
          //NOTE - If the from date is the same as the date
          calendarProps.mode === "range" &&
          calendarProps.selected?.from &&
          calendarProps.selected?.from.toDateString() === date.toDateString()
        ) {
          //NOTE - Select the date as the from and to date
          calendarProps.onSelect?.(
            { from: date, to: date },
            date,
            modifiers,
            e,
          );
        } else {
          //NOTE - Otherwise, let the event be handled as usual
          calendarProps.onDayClick?.(date, modifiers, e);
        }
      }}
      locale={
        locale === enUS
          ? {
              ...enUS,
              localize: {
                ...enUS.localize,
                day: (day) => {
                  const days = [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                  ];
                  return days[day];
                },
              },
            }
          : locale
      }
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
