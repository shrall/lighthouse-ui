import { Chip } from "@/components/ui/chip";

function Chips() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Chips</h3>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Chip>Primary</Chip>
        <Chip variant="secondary">Secondary</Chip>
        <Chip variant="outline">Outline</Chip>
        <Chip variant="inactive">Inactive</Chip>
      </div>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Chip disabled>Primary</Chip>
        <Chip variant="secondary" disabled>
          Secondary
        </Chip>
        <Chip variant="outline" disabled>
          Outline
        </Chip>
        <Chip variant="inactive" disabled>
          Inactive
        </Chip>
      </div>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Chip size="small">Primary</Chip>
        <Chip size="small" variant="secondary">
          Secondary
        </Chip>
        <Chip size="small" variant="outline">
          Outline
        </Chip>
        <Chip size="small" variant="inactive">
          Inactive
        </Chip>
      </div>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Chip
          removeOnClick={() => {
            console.log("close");
          }}
        >
          Primary
        </Chip>
        <Chip
          variant="secondary"
          removeOnClick={() => {
            console.log("close");
          }}
        >
          Secondary
        </Chip>
        <Chip
          variant="outline"
          removeOnClick={() => {
            console.log("close");
          }}
        >
          Outline
        </Chip>
        <Chip
          variant="inactive"
          removeOnClick={() => {
            console.log("close");
          }}
        >
          Inactive
        </Chip>
      </div>
    </div>
  );
}

export default Chips;
