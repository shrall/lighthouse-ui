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
        <Badge variant="success" className="md:px-3 md:py-[3px] md:text-xs">
          Success
        </Badge>
        <Badge variant="danger" className="md:px-3 md:py-[3px] md:text-xs">
          Danger
        </Badge>
        <Badge variant="warning" className="md:px-3 md:py-[3px] md:text-xs">
          Warning
        </Badge>
        <Badge variant="info" className="md:px-3 md:py-[3px] md:text-xs">
          Info
        </Badge>
        <Badge variant="inactive" className="md:px-3 md:py-[3px] md:text-xs">
          Inactive
        </Badge>
        <Badge
          variant="success"
          className="md:px-3 md:py-[3px] md:text-xs"
          textOnly
        >
          Success
        </Badge>
        <Badge
          variant="danger"
          className="md:px-3 md:py-[3px] md:text-xs"
          textOnly
        >
          Danger
        </Badge>
        <Badge
          variant="warning"
          className="md:px-3 md:py-[3px] md:text-xs"
          textOnly
        >
          Warning
        </Badge>
        <Badge
          variant="info"
          className="md:px-3 md:py-[3px] md:text-xs"
          textOnly
        >
          Info
        </Badge>
        <Badge
          variant="inactive"
          className="md:px-3 md:py-[3px] md:text-xs"
          textOnly
        >
          Inactive
        </Badge>
      </div>
    </div>
  );
}

export default Badges;
