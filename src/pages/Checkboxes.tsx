import { Checkbox } from "@/components/ui/checkbox";

function Checkboxes() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Checkboxes</h3>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Checkbox />
        <Checkbox checked="indeterminate" />
        <Checkbox checked />
        <Checkbox disabled />
        <Checkbox checked="indeterminate" disabled />
        <Checkbox checked disabled />
        <Checkbox label={{ text: "Lorem Ipsum" }} />
        <Checkbox
          label={{
            text: "Lorem Ipsum",
            className: "lui-text-ocean-primary-10",
          }}
        />
        <Checkbox checked="indeterminate" label={{ text: "Lorem Ipsum" }} />
        <Checkbox checked label={{ text: "Lorem Ipsum" }} />
        <Checkbox disabled label={{ text: "Lorem Ipsum" }} />
        <Checkbox
          checked="indeterminate"
          disabled
          label={{ text: "Lorem Ipsum" }}
        />
        <Checkbox checked disabled label={{ text: "Lorem Ipsum" }} />
      </div>
    </div>
  );
}

export default Checkboxes;
