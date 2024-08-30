import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

import { Icon } from "./icon";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group lui-font-bca lg:lui-min-w-[800px]"
      toastOptions={{
        classNames: {
          toast:
            "group toast lui-items-start lui-text-sm lui-w-full lui-p-3 lui-gap-3",
          title: "lui-font-bold",
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
        success: <Icon name="check-filled" />,
        warning: <Icon name="exclamation-filled" />,
        error: <Icon name="cross-filled" />,
        info: <Icon name="info-filled" />,
      }}
      position="top-center"
      {...props}
    />
  );
};

export { Toaster };
