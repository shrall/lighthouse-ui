import { cn } from "@/lib/utils";
import * as React from "react";
import { CheckFilled } from "./icon/CheckFilled";

type StepperProps = React.HTMLAttributes<HTMLDivElement> & {
  /** The current step of the stepper */
  step: number;
  /** The steps of the stepper */
  steps: {
    label: string;
    disabled?: boolean;
  }[];
};

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, step, steps, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("lui-flex", className)} {...props}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div
              className={cn(
                "lui-flex lui-flex-col lui-items-center lui-gap-y-1 lui-text-sm lui-font-semibold",
                s.disabled
                  ? "lui-text-ocean-light-40"
                  : "lui-text-ocean-dark-20",
              )}
            >
              {step > i + 1 ? (
                <CheckFilled className="lui-text-ocean-secondary-20" />
              ) : (
                <div
                  className={cn(
                    "lui-flex lui-size-6 lui-items-center lui-justify-center lui-rounded-full",
                    s.disabled
                      ? "lui-bg-ocean-light-20"
                      : "lui-bg-ocean-secondary-10",
                  )}
                >
                  {i + 1}
                </div>
              )}
              <span className="lui-text-sm lui-font-semibold">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="lui-flex lui-h-6 lui-w-12 lui-items-center lui-justify-center">
                <div className="lui-w-full lui-border lui-border-ocean-light-30" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  },
);

export { Stepper };
