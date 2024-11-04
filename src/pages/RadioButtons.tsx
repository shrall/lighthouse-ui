import { RadioGroup, RadioButton } from "@/components/ui/radio-group";

function RadioButtons() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Radio Buttons</h3>
      <div className="lui-grid lui-grid-cols-4 lui-items-center lui-justify-center lui-gap-2 lui-text-center sm:lui-grid-cols-5">
        <RadioGroup defaultValue="option-two">
          <RadioButton
            value="option-one"
            label={{ id: "option-one", text: "Option One" }}
          />
          <RadioButton
            value="option-two"
            label={{ id: "option-two", text: "Option Two" }}
          />
          <RadioButton
            value="option-three"
            label={{ id: "option-three", text: "Option Three" }}
            disabled
            checked
          />
          <RadioButton
            value="option-four"
            label={{ id: "option-four", text: "Option Four" }}
            disabled
          />
        </RadioGroup>
      </div>
    </div>
  );
}

export default RadioButtons;
