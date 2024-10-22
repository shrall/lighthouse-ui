"use client";

import {
  DateRange,
  DayPicker,
  useDayPicker,
  type DayPickerProps,
} from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ChevronLeftOutline } from "./icon/ChevronLeftOutline";
import { ChevronRightOutline } from "./icon/ChevronRightOutline";
import { useEffect, useRef, useState } from "react";
import { addYears, format } from "date-fns";
import { enUS } from "react-day-picker/locale";
import { Separator } from "./separator";
import { Alert, AlertProps } from "./alert";

const getYearRange = (year: number) => {
  const startYear = Math.floor(year / 12) * 12;
  const endYear = startYear + 11;
  return `${startYear}-${endYear}`;
};

type Shortcut = {
  label: string;
  range: DateRange;
};

type ShortcutsArray =
  | [Shortcut]
  | [Shortcut, Shortcut]
  | [Shortcut, Shortcut, Shortcut]
  | [Shortcut, Shortcut, Shortcut, Shortcut]
  | [Shortcut, Shortcut, Shortcut, Shortcut, Shortcut]
  | [Shortcut, Shortcut, Shortcut, Shortcut, Shortcut, Shortcut];

type CalendarProps = DayPickerProps & {
  shortcuts?: ShortcutsArray;
  size?: "medium" | "large";
  alert?: AlertProps;
};

function Calendar({
  className,
  classNames,
  locale = enUS,
  showOutsideDays = true,
  shortcuts,
  size = "large",
  alert,
  ...calendarProps
}: CalendarProps) {
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
      disabled={{
        dayOfWeek: [3],
      }}
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
            <div className="lui-flex lui-max-w-[26.5rem] lui-flex-col lui-gap-y-3">
              <div
                className={cn(
                  "lui-flex lui-gap-x-4",
                  size === "medium" && "lui-flex-col lui-gap-y-3",
                )}
              >
                {shortcuts && (
                  <div
                    ref={shortcutContainerRef}
                    className={cn(
                      "lui-flex lui-gap-2",
                      size === "large" && "lui-max-w-[7.5rem] lui-flex-col",
                      size === "medium" &&
                        "lui-scrollbar-w-none lui-w-[19rem] lui-min-w-[19rem] lui-max-w-[19rem] lui-overflow-x-scroll",
                    )}
                  >
                    {shortcuts.map((shortcut) => {
                      const buttonRef = useRef<HTMLButtonElement>(null);
                      return (
                        <Button
                          ref={buttonRef}
                          key={shortcut.label}
                          variant="ghost"
                          className={cn(
                            "lui-w-full lui-min-w-fit",
                            size === "large" && "lui-p-0",
                            size === "medium" &&
                              "lui-bg-ocean-light-30 lui-px-3 lui-py-[0.625rem] lui-text-ocean-dark-20",
                            calendarProps.mode === "range" &&
                              calendarProps.selected?.from?.getDate() ===
                                shortcut.range.from?.getDate() &&
                              calendarProps.selected?.to?.getDate() ===
                                shortcut.range.to?.getDate() &&
                              "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
                          )}
                          onClick={(e) => {
                            if (calendarProps.mode === "range") {
                              calendarProps.onSelect?.(
                                shortcut.range,
                                shortcut.range.from ?? new Date(),
                                {},
                                e,
                              );
                              goToMonth(shortcut.range.from ?? new Date());
                              console.log(buttonRef.current?.offsetLeft);
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
                  </div>
                )}
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
          const { months, goToMonth } = useDayPicker();
          if (content === "date") {
            return <table {...props} />;
          } else if (content === "month") {
            return (
              <div className="lui-grid lui-grid-cols-3 lui-gap-x-1 lui-gap-y-4">
                {Array.from({ length: 12 }, (_, i) => i).map((month) => (
                  <Button
                    key={month}
                    variant="ghost"
                    className="lui-w-full lui-min-w-fit lui-p-0 lui-text-sm"
                    onClick={() => {
                      const newDate = new Date(
                        months[0].date.getFullYear(),
                        month,
                        1,
                      );
                      goToMonth(newDate);
                      setContent("date");
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
                ))}
              </div>
            );
          } else {
            const startYear =
              Math.floor(months[0].date.getFullYear() / 12) * 12;
            return (
              <div className="lui-grid lui-grid-cols-3 lui-gap-x-1 lui-gap-y-4">
                {Array.from({ length: 12 }, (_, i) => i).map((year) => (
                  <Button
                    key={year}
                    variant="ghost"
                    className="lui-w-full lui-min-w-fit lui-p-0 lui-text-sm"
                    onClick={() => {
                      const newDate = new Date(startYear + year, 0, 1);
                      goToMonth(newDate);
                      setContent("month");
                    }}
                  >
                    {startYear + year}
                  </Button>
                ))}
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
