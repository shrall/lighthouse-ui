import { Icon, IconTypeKeys } from "@/components/ui/icon";

function Icons() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Icons</h3>
      <div className="lui-flex lui-flex-wrap lui-items-center lui-gap-2">
        {IconTypeKeys.map((icon) => (
          <Icon key={icon} name={icon} />
        ))}
      </div>
    </div>
  );
}

export default Icons;
