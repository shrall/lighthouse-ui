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
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { enUS } from "date-fns/locale";

function Calendars() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Calendars</h3>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
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
              <Icon
                name="calendar-outline"
                className="lui-mr-2 lui-h-4 lui-w-4"
              />
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
          <PopoverContent className="lui-w-auto lui-p-0" align="center">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              locale={enUS}
            />
          </PopoverContent>
        </Popover>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          locale={enUS}
        />
      </div>
    </div>
  );
}

export default Calendars;
