import { CircleStepper } from "@/components/ui/circle-stepper";
import { Stepper } from "@/components/ui/stepper";
import { useState } from "react";

function Steppers() {
  const [step, _setStep] = useState(2);
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Steppers</h3>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
        <CircleStepper
          step={step}
          totalSteps={7}
          label={{
            title: "Title",
            description: "Description",
          }}
        />
        <CircleStepper
          step={step}
          totalSteps={7}
          label={{
            title: "Title",
            description: "Description",
          }}
          align="start"
        />
        <CircleStepper
          step={step}
          totalSteps={7}
          label={{
            title: "Title",
            description: "Description",
          }}
          size="large"
        />
      </div>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
        <Stepper
          step={step}
          steps={[
            { label: "Step 1" },
            { label: "Step 2" },
            { label: "Step 3" },
            { label: "Step 4" },
            { label: "Step 5" },
            { label: "Step 6", disabled: true },
            { label: "Step 7", disabled: true },
          ]}
        />
      </div>
    </div>
  );
}

export default Steppers;
