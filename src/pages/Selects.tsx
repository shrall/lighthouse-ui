import { MultiSelect } from "@/components/ui/multi-select";
import { Select } from "@/components/ui/select";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";

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
          label="Framework"
          helperText="Select your favorite framework"
        />
        <Select
          options={frameworksList}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select framework"
          label="Framework"
          alignment="horizontal"
          errorMessage="This is an error message"
        />
        <Select
          options={frameworksList}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select framework"
          label="Label w/Tooltip"
          tooltip={
            <Tooltip
              trigger={
                <Icon
                  name="question-filled"
                  className="lui-text-ocean-primary-10"
                />
              }
              side="top"
              title="Tooltip Title"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </Tooltip>
          }
        />
        <MultiSelect
          options={frameworksList}
          onValueChange={setSelectedValues}
          defaultValue={selectedValues}
          placeholder="Select frameworks"
          maxCount={4}
          label="Framework"
          helperText="Select your favorite framework"
        />
        <MultiSelect
          options={frameworksList}
          onValueChange={setSelectedValues}
          defaultValue={selectedValues}
          placeholder="Select frameworks"
          maxCount={4}
          label="Framework"
          alignment="horizontal"
          errorMessage="This is an error message"
        />
        <MultiSelect
          options={frameworksList}
          onValueChange={setSelectedValues}
          defaultValue={selectedValues}
          placeholder="Select frameworks"
          maxCount={4}
          label="Label w/Tooltip"
          tooltip={
            <Tooltip
              trigger={
                <Icon
                  name="question-filled"
                  className="lui-text-ocean-primary-10"
                />
              }
              side="top"
              title="Tooltip Title"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </Tooltip>
          }
        />
      </div>
    </div>
  );
}

export default Selects;
