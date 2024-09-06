import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function Selects() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Selects</h3>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est" title="Eastern Standard Time (EST)" />
              <SelectItem value="cst" title="Central Standard Time (CST)" />
              <SelectItem value="mst" title="Mountain Standard Time (MST)" />
              <SelectItem value="pst" title="Pacific Standard Time (PST)" />
              <SelectItem value="akst" title="Alaska Standard Time (AKST)" />
              <SelectItem value="hst" title="Hawaii Standard Time (HST)" />
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="est"
              title="North America"
              description="Eastern Standard Time (EST)"
            />
            <SelectItem
              value="cst"
              title="North America"
              description="Central Standard Time (CST)"
            />
            <SelectItem
              value="mst"
              title="North America"
              description="Mountain Standard Time (MST)"
            />
            <SelectItem
              value="pst"
              title="North America"
              description="Pacific Standard Time (PST)"
            />
            <SelectItem
              value="akst"
              title="North America"
              description="Alaska Standard Time (AKST)"
            />
            <SelectItem
              value="hst"
              title="North America"
              description="Hawaii Standard Time (HST)"
            />
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Selects;
