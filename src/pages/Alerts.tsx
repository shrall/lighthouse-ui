import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Alerts() {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-2">
      <h3>Alerts</h3>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <Alert variant="success">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </Alert>
        <Alert
          variant="danger"
          actionType="close"
          alertAction={() => {
            console.log("error");
          }}
        >
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </Alert>
        <Alert
          variant="warning"
          alertAction={() => {
            console.log("warning");
          }}
        >
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </Alert>
        <Alert
          variant="info"
          alertAction={() => {
            console.log("info");
          }}
        >
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

export default Alerts;
