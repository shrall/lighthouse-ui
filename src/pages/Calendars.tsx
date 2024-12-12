import { addDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarOutline } from "@/components/ui/icon/CalendarOutline";
import { enUS, id } from "date-fns/locale";
import { DatePicker } from "@/components/ui/date-picker";

function Calendars() {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  console.log(singleDate);

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Calendars</h3>
      <div className="lui-flex lui-flex-col lui-items-center lui-justify-center lui-gap-2 lui-text-center md:lui-flex-row">
        <DatePicker
          asChild
          calendarProps={{
            mode: "range",
            defaultMonth: date?.from,
            selected: date,
            onSelect: setDate,
            locale: id,
            calendarType: "monthly",
          }}
        >
          <Button
            id="date"
            variant={"secondary"}
            className={cn(
              "lui-w-[300px] lui-justify-start lui-text-left lui-font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarOutline className="lui-mr-2 lui-h-4 lui-w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL, y")} - {format(date.to, "LLL, y")}
                </>
              ) : (
                format(date.from, "LLL, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </DatePicker>
        <Calendar
          mode="single"
          showMonthRangeToggle
          defaultMonth={singleDate}
          selected={singleDate}
          onSelect={setSingleDate}
          locale={id}
          alert={{
            variant: "success",
            title: "Success",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting",
          }}
        />
        <Calendar
          mode="range"
          locale={enUS}
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          shortcuts={[
            {
              label: "Today",
              range: {
                from: new Date("03/10/2000"),
                to: new Date("03/11/2000"),
              },
            },
            {
              label: "Last 7 days",
              range: { from: addDays(new Date(), -6), to: new Date() },
            },
            {
              label: "Next 7 days",
              range: {
                from: addDays(new Date(), 1),
                to: addDays(new Date(), 7),
              },
            },
            {
              label: "Next 14 days",
              range: {
                from: addDays(new Date(), 1),
                to: addDays(new Date(), 14),
              },
            },
            {
              label: "Next 30 days",
              range: {
                from: addDays(new Date(), 1),
                to: addDays(new Date(), 30),
              },
            },
          ]}
          disabled={[
            {
              from: new Date(2024, 0, 1),
              to: new Date(2024, 11, 30),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Calendars;
