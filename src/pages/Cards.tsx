import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function Cards() {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-2">
      <h3>Cards</h3>
      <div className="grid grid-cols-6 items-center justify-center gap-2 text-center">
        <Card>
          <CardHeader>
            <CardTitle>Tier 1</CardTitle>
          </CardHeader>
          <Card className="border border-ocean-light-30 shadow-none">
            <CardHeader>
              <CardTitle>Tier 2</CardTitle>
            </CardHeader>
            <Card className="shadow-card-3rd">
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
