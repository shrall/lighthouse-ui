import { MultiSelect } from "@/components/ui/multi-select";
import { Select } from "@/components/ui/select";

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
        <Select
          options={frameworksList}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select framework"
        />
        <MultiSelect
          options={frameworksList}
          onValueChange={setSelectedValues}
          defaultValue={selectedValues}
          placeholder="Select frameworks"
          maxCount={4}
        />
      </div>
    </div>
  );
}

export default Selects;
