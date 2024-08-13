import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function Cards() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Cards</h3>
      <div className="lui-grid lui-grid-cols-6 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Card>
          <CardHeader>
            <CardTitle>Tier 1</CardTitle>
          </CardHeader>
          <Card className="lui-border lui-border-ocean-light-30 lui-shadow-none">
            <CardHeader>
              <CardTitle>Tier 2</CardTitle>
            </CardHeader>
            <Card className="lui-shadow-card-3rd">
              <CardHeader>
                <CardTitle>Tier 3</CardTitle>
              </CardHeader>
            </Card>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
