import { addMinutes, TimePicker } from "@/components/ui/time-picker";
import { useState } from "react";

function TimePickers() {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>TimePickers</h3>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
        <TimePicker
          value={value}
          onValueChange={setValue}
          disabledTimes={[{ start: "12:00", end: "14:00" }, "13:30"]}
          interval={60}
          errorMessage={"This time is not available"}
        />
      </div>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
        <TimePicker
          value={value}
          onValueChange={setValue}
          min="12:00"
          max="17:00"
          errorMessage={"This time is not available"}
        />
        <TimePicker
          value={value2}
          onValueChange={setValue2}
          min={value ? addMinutes(value, 30) : "12:00"}
          max="17:00"
          errorMessage={"This time is not available"}
        />
      </div>
    </div>
  );
}

export default TimePickers;
