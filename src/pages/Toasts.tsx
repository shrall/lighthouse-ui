import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

function Toasts() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Toasts</h3>
      <div className="lui-grid lui-grid-cols-2 lui-items-center lui-justify-center lui-gap-2 lui-text-center md:lui-grid-cols-4">
        <Button
          onClick={() => {
            toast.success("Event has been created.");
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            toast.error("Event has been created.");
          }}
        >
          Danger
        </Button>
        <Button
          onClick={() => {
            toast.warning("Event has been created.");
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            toast.info("Event has been created.");
          }}
        >
          Info
        </Button>

        <Button
          onClick={() => {
            toast.success("Success", {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            });
          }}
        >
          Success w/ Description
        </Button>
        <Button
          onClick={() => {
            toast.error("Error", {
              action: {
                label: (
                  <Icon
                    name="chevron-right-outline"
                    onClick={() => {
                      console.log("Action!");
                    }}
                  />
                ),
                onClick: () => console.log("Action!"),
              },
            });
          }}
        >
          Danger w/ Action
        </Button>
        <Button
          onClick={() => {
            toast.warning("Warning", {
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              action: {
                label: (
                  <Icon
                    name="chevron-right-outline"
                    onClick={() => {
                      console.log("Action!");
                    }}
                  />
                ),
                onClick: () => console.log("Action!"),
              },
            });
          }}
        >
          Warning w/ Description + Action
        </Button>
        <Button
          onClick={() => {
            toast.info("Event has been created.");
          }}
        >
          Info
        </Button>
      </div>
    </div>
  );
}

export default Toasts;
