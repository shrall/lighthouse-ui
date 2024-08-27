import { Input } from "@/components/ui/input";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";
import { useState } from "react";

function Inputs() {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Inputs</h3>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-gap-2">
        <Input
          placeholder="Placeholder"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          placeholder="Placeholder"
          leftNode={
            <Icon name="search-outline" className="lui-min-h-6 lui-min-w-6" />
          }
          rightNode={
            value && (
              <Icon
                name="cross-filled"
                className="lui-min-h-6 lui-min-w-6 lui-cursor-pointer"
                onClick={() => setValue("")}
              />
            )
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          placeholder="Placeholder"
          leftNode={
            <Icon name="search-outline" className="lui-min-h-6 lui-min-w-6" />
          }
          rightNode={
            value && (
              <Icon
                name="cross-filled"
                className="lui-min-h-6 lui-min-w-6 lui-cursor-pointer"
                onClick={() => setValue("")}
              />
            )
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled
        />
      </div>
      <div className="lui-grid lui-grid-cols-6 lui-items-center lui-gap-2">
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText="Optional helper text"
        />
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage="Error"
        />
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type={showPassword ? "text" : "password"}
          rightNode={
            <Icon
              name="eye-open-outline"
              className="lui-min-h-6 lui-min-w-6 lui-cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type={showPassword ? "text" : "password"}
          rightNode={
            <Icon
              name="eye-open-outline"
              className="lui-min-h-6 lui-min-w-6 lui-cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled
        />
      </div>
      <div className="lui-grid lui-grid-cols-2 lui-items-center lui-gap-2">
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Label"
        />
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
      <div className="lui-grid lui-grid-cols-2 lui-items-center lui-gap-2">
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Label"
          alignment="horizontal"
        />
        <Input
          inputStyle="underline"
          placeholder="Placeholder"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Long Label w/Tooltip"
          alignment="horizontal"
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

export default Inputs;
