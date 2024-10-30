import { Switch } from "@/components/ui/switch";

function Switches() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Switches</h3>
      <div className="lui-grid lui-grid-cols-4 lui-items-center lui-justify-center lui-gap-2 lui-text-center sm:lui-grid-cols-5">
        <Switch />
        <Switch disabled />
      </div>
    </div>
  );
}

export default Switches;
