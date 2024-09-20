import { Button } from "@/components/ui/button";

function Buttons() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Buttons</h3>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center md:lui-grid-cols-6">
        <Button size="small">Primary</Button>
        <Button>Primary</Button>
        <Button size="large">Primary</Button>
        <Button size="small" disabled>
          Primary
        </Button>
        <Button disabled>Primary</Button>
        <Button size="large" disabled>
          Primary
        </Button>

        <Button variant="secondary" size="small">
          Secondary
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" size="large">
          Secondary
        </Button>
        <Button variant="secondary" size="small" disabled>
          Secondary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="secondary" size="large" disabled>
          Secondary
        </Button>

        <Button variant="ghost" size="small">
          Ghost
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" size="large">
          Ghost
        </Button>
        <Button variant="ghost" size="small" disabled>
          Ghost
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="ghost" size="large" disabled>
          Ghost
        </Button>
        <Button size="small" leftIcon="placeholder-outline">
          Primary
        </Button>
        <Button leftIcon="placeholder-outline">Primary</Button>
        <Button size="large" leftIcon="placeholder-outline">
          Primary
        </Button>

        <Button size="small" rightIcon="placeholder-outline">
          Primary
        </Button>
        <Button rightIcon="placeholder-outline">Primary</Button>
        <Button size="large" rightIcon="placeholder-outline">
          Primary
        </Button>

        <Button
          size="small"
          leftIcon="placeholder-outline"
          rightIcon="placeholder-outline"
        >
          Primary
        </Button>
        <Button leftIcon="placeholder-outline" rightIcon="placeholder-outline">
          Primary
        </Button>
        <Button
          size="large"
          leftIcon="placeholder-outline"
          rightIcon="placeholder-outline"
        >
          Primary
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
