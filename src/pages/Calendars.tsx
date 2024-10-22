import { addDays, format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { enUS, id } from "date-fns/locale";
import { CalendarOutline } from "@/components/ui/icon/CalendarOutline";

function Calendars() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Calendars</h3>
      <div className="lui-flex lui-flex-col lui-items-center lui-justify-center lui-gap-2 lui-text-center md:lui-flex-row">
        <Popover>
          <PopoverTrigger asChild>
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
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center">
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              locale={enUS}
            />
          </PopoverContent>
        </Popover>
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          locale={id}
          shortcuts={[
            {
              label: "Today",
              range: { from: new Date(), to: new Date() },
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
          alert={{
            variant: "success",
            title: "Success",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting",
          }}
        />
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
        />
      </div>
    </div>
  );
}

export default Calendars;
