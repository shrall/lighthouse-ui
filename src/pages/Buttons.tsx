import { Button } from "@/components/ui/button";
import { PlaceholderOutline } from "@/index";

function Buttons() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Buttons</h3>
      <div className="lui-grid lui-grid-cols-2 lui-items-center lui-justify-center lui-gap-2 lui-text-center sm:lui-grid-cols-3 md:lui-grid-cols-6">
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

        <Button variant="inversed" size="small">
          Inversed
        </Button>
        <Button variant="inversed">Inversed</Button>
        <Button variant="inversed" size="large">
          Inversed
        </Button>
        <Button variant="inversed" size="small" disabled>
          Inversed
        </Button>
        <Button variant="inversed" disabled>
          Inversed
        </Button>
        <Button variant="inversed" size="large" disabled>
          Inversed
        </Button>

        <Button variant="link" size="small">
          Link
        </Button>
        <Button variant="link">Link</Button>
        <Button variant="link" size="large">
          Link
        </Button>
        <Button variant="link" size="small" disabled>
          Link
        </Button>
        <Button variant="link" disabled>
          Link
        </Button>
        <Button variant="link" size="large" disabled>
          Link
        </Button>

        <Button size="small" leftNode={<PlaceholderOutline />}>
          Primary
        </Button>
        <Button leftNode={<PlaceholderOutline />}>Primary</Button>
        <Button size="large" leftNode={<PlaceholderOutline />}>
          Primary
        </Button>

        <Button size="small" rightNode={<PlaceholderOutline />}>
          Primary
        </Button>
        <Button rightNode={<PlaceholderOutline />}>Primary</Button>
        <Button size="large" rightNode={<PlaceholderOutline />}>
          Primary
        </Button>

        <Button
          size="small"
          leftNode={<PlaceholderOutline />}
          rightNode={<PlaceholderOutline />}
        >
          Primary
        </Button>
        <Button
          leftNode={<PlaceholderOutline />}
          rightNode={<PlaceholderOutline />}
        >
          Primary
        </Button>
        <Button
          size="large"
          leftNode={<PlaceholderOutline />}
          rightNode={<PlaceholderOutline />}
        >
          Primary
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
