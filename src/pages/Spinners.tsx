import { Spinner } from "@/components/ui/spinner";

function Spinners() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Spinners</h3>
      <div className="lui-grid lui-grid-cols-4 lui-items-center lui-justify-center lui-gap-2 lui-text-center sm:lui-grid-cols-5">
        <Spinner />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>
    </div>
  );
}

export default Spinners;
