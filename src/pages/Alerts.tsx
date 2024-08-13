import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Alerts() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Alerts</h3>
      <div className="lui-flex lui-flex-col lui-items-center lui-justify-center lui-gap-2 lui-text-center">
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
