import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

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
          actionButton: "!bg-transparent !pr-0 !text-ocean-dark-20",
          icon: "mt-0.5",
          //NOTE - Variants
          success: "bg-ocean-success-10 text-ocean-success-20",
          error: "bg-ocean-danger-10 text-ocean-danger-20",
          warning: "bg-ocean-warning-10 text-ocean-warning-20",
          info: "bg-ocean-secondary-10 text-ocean-primary-10",
        },
      }}
      position="top-center"
      {...props}
    />
  );
};

export { Toaster };
