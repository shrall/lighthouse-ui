import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Icon } from "./icon";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-bca lg:min-w-[800px]"
      toastOptions={{
        classNames: {
          toast: "group toast items-start text-sm w-full",
          title: "font-bold",
          actionButton: "!bg-transparent !pr-0 !text-current",
          icon: "m-0 min-w-6 min-h-6",
          //NOTE - Variants
          success: "bg-ocean-success-10 text-ocean-success-20",
          error: "bg-ocean-danger-10 text-ocean-danger-20",
          warning: "bg-ocean-warning-10 text-ocean-warning-20",
          info: "bg-ocean-secondary-10 text-ocean-primary-10",
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
