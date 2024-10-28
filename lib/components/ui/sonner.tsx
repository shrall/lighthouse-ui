import { Toaster as Sonner, toast } from "sonner";

import { CheckFilled } from "./icon/CheckFilled";
import { ExclamationFilled } from "./icon/ExclamationFilled";
import { CrossFilled } from "./icon/CrossFilled";
import { InfoFilled } from "./icon/InfoFilled";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="lui-w-[calc(100vw-2.5rem)] lui-max-w-[800px] lui-font-bca"
      toastOptions={{
        classNames: {
          toast:
            "lui-items-start lui-text-sm lui-w-full lui-p-3 lui-gap-3 lui-border-0",
          title: "lui-font-bold lui-leading-6",
          actionButton: "!lui-bg-transparent !lui-px-0 !lui-text-current",
          icon: "lui-m-0 lui-min-w-6 lui-min-h-6",
          //NOTE - Variants
          success: "lui-bg-ocean-success-10 lui-text-ocean-success-20",
          error: "lui-bg-ocean-danger-10 lui-text-ocean-danger-20",
          warning: "lui-bg-ocean-warning-10 lui-text-ocean-warning-20",
          info: "lui-bg-ocean-secondary-10 lui-text-ocean-primary-10",
        },
      }}
      icons={{
        success: <CheckFilled />,
        warning: <ExclamationFilled />,
        error: <CrossFilled />,
        info: <InfoFilled />,
      }}
      position="top-center"
      {...props}
    />
  );
}

export { Toaster, toast };
