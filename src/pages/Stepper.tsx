import { StepperCircle } from "@/components/ui/stepper-circle";
import { Stepper } from "@/components/ui/stepper";
import { useState } from "react";

function Steppers() {
  const [step, _setStep] = useState(1);
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Steppers</h3>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
        <StepperCircle
          step={step}
          totalSteps={7}
          label={{
            title: "Title",
            description: "Description",
          }}
        />
        <StepperCircle
          step={step}
          totalSteps={7}
          label={{
            title: "Title",
            description: "Description",
          }}
          align="start"
        />
        <StepperCircle
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
            { label: "Step 3", disabled: true },
            { label: "Step 4", disabled: true },
          ]}
        />
      </div>
    </div>
  );
}

export default Steppers;
