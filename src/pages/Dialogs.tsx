import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogText } from "@/components/ui/dialog-text";

function Dialogs() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Dialogs</h3>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <DialogText
          title="Information"
          description="Morbi rutrum elit et egestas ultricies. Aenean eu lorem id justo Morbi rutrum elit et egestas ultricies. Aenean eu lorem id justo "
        >
          Open
        </DialogText>
        <DialogText
          title="With Buttons"
          buttons={{
            primary: {
              text: "Primary",
              onClick: () => console.log("Primary"),
            },
            secondary: {
              text: "Secondary",
              onClick: () => console.log("Secondary"),
            },
          }}
        >
          w/ Buttons
        </DialogText>
        <Dialog>
          <DialogTrigger>Show</DialogTrigger>
          <DialogContent>hello!</DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Dialogs;
