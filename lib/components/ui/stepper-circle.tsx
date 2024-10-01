import { cn } from "@/lib/utils";
import React from "react";

type StepperCircleProps = React.HTMLAttributes<HTMLDivElement> & {
  /** The current step of the stepper */
  step: number;
  /** The total number of steps in the stepper */
  totalSteps: number;
  /** The label for the stepper */
  label: {
    title: string;
    description?: string;
  };
  /** The alignment of the stepper */
  align?: "start" | "end";
  /** The size of the stepper */
  size?: "medium" | "large";
};

const StepperCircle = React.forwardRef<HTMLDivElement, StepperCircleProps>(
  (
    {
      className,
      step,
      totalSteps,
      label,
      align = "end",
      size = "medium",
      ...props
    },
    ref,
  ) => {
    const circumference = 2 * Math.PI * (size === "medium" ? 20 : 25);

    return (
      <div
        ref={ref}
        className={cn(
          "lui-flex lui-items-center lui-justify-center lui-gap-x-3",
          align === "start" ? "lui-flex-row-reverse" : "lui-flex-row",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "lui-flex-col",
            align === "start" ? "lui-text-start" : "lui-text-end",
          )}
        >
          <h6
            className={cn(
              "lui-font-bold lui-text-ocean-dark-20",
              size === "medium" ? "lui-text-sm" : "lui-text-base",
            )}
          >
            {label.title}
          </h6>
          {label.description && (
            <p
              className={cn(
                "lui-text-ocean-dark-10",
                size === "medium" ? "lui-text-xs" : "lui-text-sm",
              )}
            >
              {label.description}
            </p>
          )}
        </div>
        <div className="lui-inline-flex lui-items-center lui-justify-center lui-rounded-full">
          <svg
            className={cn(
              size === "medium" ? "lui-size-[45px]" : "lui-size-[55px]",
            )}
          >
            <circle
              className="lui-text-ocean-secondary-10"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
              r={size === "medium" ? "20" : "25"}
              cx={size === "medium" ? "22.5" : "27.5"}
              cy={size === "medium" ? "22.5" : "27.5"}
            />
            <circle
              className="lui-text-ocean-secondary-20"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (step / totalSteps) * circumference
              }
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={size === "medium" ? "20" : "25"}
              cx={size === "medium" ? "22.5" : "27.5"}
              cy={size === "medium" ? "22.5" : "27.5"}
              transform={
                size === "medium"
                  ? "rotate(-90 22.5 22.5)"
                  : "rotate(-90 27.5 27.5)"
              }
            />
          </svg>
          <span
            className={cn(
              "lui-absolute lui-font-bold lui-text-ocean-dark-30",
              size === "medium" ? "lui-text-xs" : "lui-text-sm",
            )}
          >
            {step}/{totalSteps}
          </span>
        </div>
      </div>
    );
  },
);

export { StepperCircle };
