import { MultiSelect } from "@/components/ui/multi-select";
import { Select } from "@/components/ui/select";

import { useState } from "react";
import { QuestionFilled } from "@/components/ui/icon/QuestionFilled";
import { TooltipText } from "@/index";

function Selects() {
  const [frameworksList, setFrameworksList] = useState([
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
  ]);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [search, setSearch] = useState("");

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
          search={{
            query: search,
            setQuery: setSearch,
          }}
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
          label="Label w/TooltipText"
          tooltip={
            <TooltipText
              title="TooltipText Title"
              description="
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor."
            >
              <QuestionFilled className="lui-text-ocean-primary-10" />
            </TooltipText>
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
          search={{
            query: search,
            setQuery: setSearch,
          }}
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
          label="Label w/TooltipText"
          tooltip={
            <TooltipText
              title="TooltipText Title"
              description="
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor."
            >
              <QuestionFilled className="lui-text-ocean-primary-10" />
            </TooltipText>
          }
        />
        <Select
          options={frameworksList}
          value={selectedValue}
          onValueChange={setSelectedValue}
          placeholder="Select framework"
          label="Framework"
          helperText="Select your favorite framework"
          disabled
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
          helperText="Select your favorite framework"
          infiniteScroll={{
            fetchMore: () => {
              setFrameworksList([
                ...frameworksList,
                {
                  value: Math.random().toString(),
                  label: `Framework ${Math.random().toString()}`,
                  description: "A new framework",
                },
                {
                  value: Math.random().toString(),
                  label: `Framework ${Math.random().toString()}`,
                  description: "A new framework",
                },
                {
                  value: Math.random().toString(),
                  label: `Framework ${Math.random().toString()}`,
                  description: "A new framework",
                },
                {
                  value: Math.random().toString(),
                  label: `Framework ${Math.random().toString()}`,
                  description: "A new framework",
                },
              ]);
            },
            hasMore: true,
          }}
        />
      </div>
    </div>
  );
}

export default Selects;
