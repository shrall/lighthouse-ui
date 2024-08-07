import { Badge } from "@/components/ui/badge";

function Badges() {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-2">
      <h3>Badges</h3>
      <div className="grid grid-cols-5 items-center justify-center gap-2 text-center">
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="inactive">Inactive</Badge>
        <Badge variant="success" size="mobile">
          Success
        </Badge>
        <Badge variant="danger" size="mobile">
          Danger
        </Badge>
        <Badge variant="warning" size="mobile">
          Warning
        </Badge>
        <Badge variant="info" size="mobile">
          Info
        </Badge>
        <Badge variant="inactive" size="mobile">
          Inactive
        </Badge>
        <Badge variant="success" size="mobile" textOnly>
          Success
        </Badge>
        <Badge variant="danger" size="mobile" textOnly>
          Danger
        </Badge>
        <Badge variant="warning" size="mobile" textOnly>
          Warning
        </Badge>
        <Badge variant="info" size="mobile" textOnly>
          Info
        </Badge>
        <Badge variant="inactive" size="mobile" textOnly>
          Inactive
        </Badge>
      </div>
    </div>
  );
}

export default Badges;
