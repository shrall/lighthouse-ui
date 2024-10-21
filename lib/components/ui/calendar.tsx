"use client";

import { DayPicker, useDayPicker, type DayPickerProps } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ChevronLeftOutline } from "./icon/ChevronLeftOutline";
import { ChevronRightOutline } from "./icon/ChevronRightOutline";
import { useState } from "react";
import { addYears, format } from "date-fns";
import { enUS } from "react-day-picker/locale";

export type CalendarProps = DayPickerProps;

function Calendar({
  className,
  classNames,
  locale = enUS,
  showOutsideDays = true,

  ...props
}: CalendarProps) {
  const [content, setContent] = useState<"date" | "month" | "year">("date");

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      disabled={{
        dayOfWeek: [3],
      }}
      className={cn(
        "lui-w-[21rem] lui-min-w-[21rem] lui-max-w-[21rem] lui-p-4",
        className,
      )}
      classNames={{
        months:
          "lui-relative lui-flex lui-flex-col sm:lui-flex-row lui-space-y-4 sm:lui-space-x-4 sm:lui-space-y-0",
        month: "lui-min-w-full",
        caption_label: "lui-text-sm lui-font-medium",
        month_grid: "lui-w-full",
        weekdays: "lui-flex lui-gap-x-1 lui-text-ocean-dark-10",
        weekday:
          "lui-size-10 lui-text-sm lui-font-semibold lui-flex lui-items-center lui-justify-center",
        weeks: "",
        week: "lui-flex lui-mt-2 lui-gap-x-1",
        day: "lui-p-0",
        range_middle: "bg-accent last:rounded-e-md first:rounded-s-md",
        range_start: "bg-accent rounded-s-md",
        range_end: "bg-accent rounded-e-md",
        ...classNames,
      }}
      components={{
        MonthGrid({ ...props }) {
          if (content === "date") {
            return <table {...props} />;
          } else {
            const { months, goToMonth } = useDayPicker();
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
                  "lui-border lui-border-ocean-primary-10 lui-bg-ocean-secondary-10 lui-text-ocean-primary-10 hover:lui-text-white disabled:lui-border disabled:lui-border-solid disabled:lui-border-ocean-dark-10 disabled:lui-bg-ocean-light-30 disabled:lui-text-ocean-dark-10",
                modifiers?.outside &&
                  "lui-pointer-events-none lui-border-none lui-bg-transparent lui-text-ocean-light-40 disabled:lui-border-none disabled:lui-bg-transparent disabled:lui-text-ocean-light-40",
                modifiers?.disabled &&
                  "lui-border-none lui-bg-transparent lui-text-ocean-light-40",
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
              <Button
                variant="ghost"
                className="lui-w-fit lui-min-w-fit lui-p-2"
                onClick={() => {
                  if (content === "date") {
                    nextMonth && goToMonth(nextMonth);
                  } else if (content === "month") {
                    goToMonth(addYears(props.calendarMonth.date, 1));
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
      {...props}
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
