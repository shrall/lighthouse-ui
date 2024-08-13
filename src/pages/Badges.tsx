import { Badge } from "@/components/ui/badge";

function Badges() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Badges</h3>
      <div className="lui-grid lui-grid-cols-5 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="inactive">Inactive</Badge>
        <Badge
          variant="success"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
        >
          Success
        </Badge>
        <Badge
          variant="danger"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
        >
          Danger
        </Badge>
        <Badge
          variant="warning"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
        >
          Warning
        </Badge>
        <Badge
          variant="info"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
        >
          Info
        </Badge>
        <Badge
          variant="inactive"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
        >
          Inactive
        </Badge>
        <Badge
          variant="success"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
          textOnly
        >
          Success
        </Badge>
        <Badge
          variant="danger"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
          textOnly
        >
          Danger
        </Badge>
        <Badge
          variant="warning"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
          textOnly
        >
          Warning
        </Badge>
        <Badge
          variant="info"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
          textOnly
        >
          Info
        </Badge>
        <Badge
          variant="inactive"
          className="md:lui-px-3 md:lui-py-[3px] md:lui-text-xs"
          textOnly
        >
          Inactive
        </Badge>
      </div>
    </div>
  );
}

export default Badges;
