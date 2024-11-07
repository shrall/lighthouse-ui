import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { ChevronRightOutline } from "@/components/ui/icon/ChevronRightOutline";
import { CrossLargeOutline } from "@/components/ui/icon/CrossLargeOutline";

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
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
                  <ChevronRightOutline
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
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              action: {
                label: (
                  <CrossLargeOutline
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
            toast.info("Event has been created.", {
              duration: 1000000,
            });
          }}
        >
          Info w/ Long Duration
        </Button>
      </div>
    </div>
  );
}

export default Toasts;
