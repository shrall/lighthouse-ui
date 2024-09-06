import { MultiSelect } from "@/components/ui/multi-select";
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

const frameworksList = [
  {
    value: "react",
    label: "React",
    description: "A JavaScript library for building user interfaces",
  },
  {
    value: "angular",
    label: "Angular",
    description:
      "A platform and framework for building single-page client applications using HTML and TypeScript",
  },
  {
    value: "vue",
    label: "Vue",
    description: "A progressive framework for building user interfaces",
  },
  {
    value: "svelte",
    label: "Svelte",
    description: "A new way to build web applications",
  },
  {
    value: "ember",
    label: "Ember",
    description: "A framework for ambitious web developers",
  },
];

function Selects() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

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
        <MultiSelect
          options={frameworksList}
          onValueChange={setSelectedValues}
          defaultValue={selectedValues}
          placeholder="Select frameworks"
          maxCount={2}
        />
      </div>
    </div>
  );
}

export default Selects;
