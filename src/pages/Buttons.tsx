import { Button } from "@/components/ui/button";

function Buttons() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Buttons</h3>
      <div className="lui-grid lui-grid-cols-6 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Button>Primary</Button>
        <Button size="medium">Primary</Button>
        <Button size="small">Primary</Button>
        <Button disabled>Primary</Button>
        <Button size="medium" disabled>
          Primary
        </Button>
        <Button size="small" disabled>
          Primary
        </Button>

        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" size="medium">
          Secondary
        </Button>
        <Button variant="secondary" size="small">
          Secondary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="secondary" size="medium" disabled>
          Secondary
        </Button>
        <Button variant="secondary" size="small" disabled>
          Secondary
        </Button>

        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" size="medium">
          Ghost
        </Button>
        <Button variant="ghost" size="small">
          Ghost
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="ghost" size="medium" disabled>
          Ghost
        </Button>
        <Button variant="ghost" size="small" disabled>
          Ghost
        </Button>
        <Button leftIcon="placeholder-outline">Primary</Button>
        <Button rightIcon="placeholder-outline">Primary</Button>
        <Button leftIcon="placeholder-outline" rightIcon="placeholder-outline">
          Primary
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
