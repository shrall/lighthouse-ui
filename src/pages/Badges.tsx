import { Badge } from "@/components/ui/badge";

function Badges() {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-2">
      <h3>Badges</h3>
      <div className="grid grid-cols-5 items-center justify-center gap-2 text-center">
        <Badge theme="success">Success</Badge>
        <Badge theme="danger">Danger</Badge>
        <Badge theme="warning">Warning</Badge>
        <Badge theme="info">Info</Badge>
        <Badge theme="inactive">Inactive</Badge>
        <Badge theme="success" variant="mobile">
          Success
        </Badge>
        <Badge theme="danger" variant="mobile">
          Danger
        </Badge>
        <Badge theme="warning" variant="mobile">
          Warning
        </Badge>
        <Badge theme="info" variant="mobile">
          Info
        </Badge>
        <Badge theme="inactive" variant="mobile">
          Inactive
        </Badge>
        <Badge theme="success" variant="mobile" textOnly>
          Success
        </Badge>
        <Badge theme="danger" variant="mobile" textOnly>
          Danger
        </Badge>
        <Badge theme="warning" variant="mobile" textOnly>
          Warning
        </Badge>
        <Badge theme="info" variant="mobile" textOnly>
          Info
        </Badge>
        <Badge theme="inactive" variant="mobile" textOnly>
          Inactive
        </Badge>
      </div>
    </div>
  );
}

export default Badges;
