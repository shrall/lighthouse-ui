"use client";

import * as React from "react";
import {
  CaptionProps,
  DayPicker,
  Head,
  Row,
  useNavigation,
} from "react-day-picker";

import { cn } from "@/lib/utils";
import { format, addYears } from "date-fns";
import { Button } from "./button";
import { enUS } from "date-fns/locale";
import { ChevronLeftOutline } from "./icon/ChevronLeftOutline";
import { ChevronRightOutline } from "./icon/ChevronRightOutline";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const getYearRange = (year: number) => {
  const startYear = Math.floor(year / 12) * 12;
  const endYear = startYear + 12;
  return `${startYear}-${endYear}`;
};

const enMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const idMonths = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  locale,
  ...props
}: CalendarProps) {
  const [content, setContent] = React.useState<"date" | "month" | "year">(
    "date",
  );
  const [showCustomMonthYear, setShowCustomMonthYear] = React.useState(false);
  const [monthWeekNumber, setMonthWeekNumber] = React.useState(0);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("lui-select-none", className)}
      classNames={{
        months:
          "lui-flex lui-flex-col sm:lui-flex-row lui-space-y-4 sm:lui-space-x-4 sm:lui-space-y-0",
        month: "lui-space-y-4 lui-font-bca",
        caption:
          "lui-flex lui-justify-center lui-pt-1 lui-relative lui-items-center",
        caption_label: "lui-text-sm lui-font-medium lui-text-ocean-primary-10",
        nav: "lui-space-x-1 lui-flex lui-items-center",
        nav_button:
          "lui-h-7 lui-w-7 lui-bg-transparent lui-p-0 lui-opacity-50 hover:lui-opacity-100 lui-border-0",
        nav_button_previous: "lui-absolute lui-left-1",
        nav_button_next: "lui-absolute lui-right-1",
        table: "lui-w-full lui-border-collapse lui-space-y-1",
        head_row: "lui-flex lui-gap-x-1.5 lui-w-full lui-justify-between",
        head_cell:
          "text-slate-500 lui-rounded-md lui-w-9 lui-font-normal text-[0.8rem]",
        row: "lui-flex lui-w-full lui-mt-2 lui-gap-x-1.5 lui-justify-between",
        cell: "lui-h-9 lui-w-9 lui-text-center lui-text-sm lui-p-0 lui-relative hover:lui-bg-ocean-primary-20 disabled:hover:lui-bg-transparent lui-rounded-full [&:has([aria-selected])]:lui-bg-ocean-secondary-10 [&:has([aria-selected])]:lui-text-ocean-primary-10 focus-within:lui-relative focus-within:lui-z-20",
        day: "lui-h-9 lui-w-9 lui-p-0 lui-font-normal aria-selected:lui-opacity-100 lui-text-ocean-primary-10 lui-rounded-full hover:lui-text-white",
        day_range_end: "day-range-end",
        day_selected:
          "lui-bg-ocean-primary-10 lui-text-white hover:lui-bg-ocean-primary-20",
        day_today: "",
        day_outside:
          "day-outside text-slate-500 lui-opacity-50 aria-selected:lui-bg-ocean-primary-10 aria-selected:lui-opacity-30",
        day_disabled: "text-slate-500 lui-opacity-50",
        day_range_middle:
          "aria-selected:lui-bg-ocean-secondary-10 aria-selected:lui-text-ocean-primary-10 lui-border lui-border-ocean-primary-10 lui-text-ocean-primary-10",
        day_hidden: "lui-invisible",
        ...classNames,
      }}
      components={{
        Caption: (props: CaptionProps) => {
          const { goToMonth, nextMonth, previousMonth } = useNavigation();

          return (
            <div className="lui-flex lui-w-80 lui-items-center lui-justify-between lui-pb-1">
              <ChevronLeftOutline
                className="lui-size-4 lui-cursor-pointer lui-text-ocean-dark-20"
                onClick={() => {
                  if (content === "date" || content === "month") {
                    previousMonth && goToMonth(previousMonth);
                  } else if (content === "year") {
                    goToMonth(addYears(props.displayMonth, -1));
                  }
                  if (content === "month" || content === "year") {
                    setShowCustomMonthYear(false);
                  }
                }}
              />
              {content === "date" && (
                <>
                  <span
                    className="lui-cursor-pointer lui-font-semibold lui-text-ocean-primary-10"
                    onClick={() => {
                      setContent("month");
                      setShowCustomMonthYear(false);
                    }}
                  >
                    {format(props.displayMonth, "MMM")}
                  </span>
                  <span
                    className="lui-cursor-pointer lui-font-semibold lui-text-ocean-primary-10"
                    onClick={() => {
                      setContent("year");
                      setShowCustomMonthYear(false);
                    }}
                  >
                    {props.displayMonth.getFullYear()}
                  </span>
                </>
              )}
              {content === "month" && (
                <span
                  className="lui-cursor-pointer lui-font-semibold lui-text-ocean-primary-10"
                  onClick={() => {
                    setContent("year");
                    setShowCustomMonthYear(false);
                  }}
                >
                  {format(props.displayMonth, "yyyy")}
                </span>
              )}
              {content === "year" && (
                <span
                  className="lui-cursor-pointer lui-font-semibold lui-text-ocean-primary-10"
                  onClick={() => {
                    setContent("date");
                  }}
                >
                  {getYearRange(props.displayMonth.getFullYear())}
                </span>
              )}
              <ChevronRightOutline
                className="lui-size-4 lui-cursor-pointer lui-text-ocean-dark-20"
                onClick={() => {
                  if (content === "date" || content === "month") {
                    nextMonth && goToMonth(nextMonth);
                  } else if (content === "year") {
                    goToMonth(addYears(props.displayMonth, 1));
                  }
                  if (content === "month" || content === "year") {
                    setShowCustomMonthYear(false);
                  }
                }}
              />
            </div>
          );
        },
        Head(): JSX.Element | null {
          if (content !== "date") return null;
          return Head();
        },
        Row(props): JSX.Element | null {
          if (content === "month") {
            const { goToMonth } = useNavigation();

            React.useEffect(() => {
              if (!showCustomMonthYear) {
                setMonthWeekNumber(props.weekNumber);
                setShowCustomMonthYear(true);
              }
            }, [content]);

            if (props.weekNumber === monthWeekNumber) {
              const months = locale === enUS ? enMonths : idMonths;

              return (
                <tr className="lui-grid lui-grid-cols-3 lui-gap-x-2 lui-gap-y-4">
                  {months.map((month, index) => (
                    <td key={month}>
                      <Button
                        onClick={() => {
                          goToMonth(
                            new Date(props.displayMonth.getFullYear(), index),
                          );
                          setContent("date");
                        }}
                        variant="ghost"
                        className={cn(
                          "lui-w-full lui-min-w-0 lui-max-w-24 lui-p-0",
                          props.displayMonth.getMonth() === index &&
                            "lui-bg-ocean-primary-10 lui-text-white",
                        )}
                      >
                        {month}
                      </Button>
                    </td>
                  ))}
                </tr>
              );
            } else {
              return null;
            }
          }
          if (content === "year") {
            const { goToMonth } = useNavigation();

            React.useEffect(() => {
              if (!showCustomMonthYear) {
                setMonthWeekNumber(props.weekNumber);
                setShowCustomMonthYear(true);
              }
            }, [content]);

            if (props.weekNumber === monthWeekNumber) {
              const startYear =
                Math.floor(props.displayMonth.getFullYear() / 12) * 12;
              const years = Array.from({ length: 12 }, (_, i) => startYear + i);

              return (
                <tr className="lui-grid lui-grid-cols-3 lui-gap-x-2 lui-gap-y-4">
                  {years.map((year) => (
                    <td key={year}>
                      <Button
                        onClick={() => {
                          goToMonth(new Date(year, 0));
                          setContent("date");
                        }}
                        variant="ghost"
                        className={cn(
                          "lui-w-full lui-min-w-0 lui-max-w-24 lui-p-0",
                          props.displayMonth.getFullYear() === year &&
                            "lui-bg-ocean-primary-10 lui-text-white",
                        )}
                      >
                        {year}
                      </Button>
                    </td>
                  ))}
                </tr>
              );
            } else {
              return null;
            }
          }
          return Row({
            ...props,
          });
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
