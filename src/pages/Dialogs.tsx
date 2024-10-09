import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogText } from "@/components/ui/dialog-text";

function Dialogs() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Dialogs</h3>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2 lui-text-center">
        <Dialog>
          <DialogTrigger>
            <Button>xs</Button>
          </DialogTrigger>
          <DialogContent size="xs">hello!</DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button>sm</Button>
          </DialogTrigger>
          <DialogContent size="sm">hello!</DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button>md</Button>
          </DialogTrigger>
          <DialogContent size="md">hello!</DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button>lg</Button>
          </DialogTrigger>
          <DialogContent size="lg">hello!</DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button>xl</Button>
          </DialogTrigger>
          <DialogContent size="xl">hello!</DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button>full</Button>
          </DialogTrigger>
          <DialogContent size="full">hello!</DialogContent>
        </Dialog>
      </div>
      <div className="lui-flex lui-items-center lui-gap-2 lui-text-center">
        <DialogText
          title="Information"
          description="Morbi rutrum elit et egestas ultricies. Aenean eu lorem id justo Morbi rutrum elit et egestas ultricies. Aenean eu lorem id justo "
        >
          <Button>Text</Button>
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
          <Button>Text w/ Buttons</Button>
        </DialogText>
      </div>
    </div>
  );
}

export default Dialogs;
