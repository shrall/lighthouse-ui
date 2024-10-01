import CircleStepper from "@/components/ui/circle-stepper";
import { useState } from "react";

function Steppers() {
  const [step, _setStep] = useState(1);
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
    </div>
  );
}

export default Steppers;
