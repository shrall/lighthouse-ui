import { Alert } from "@/components/ui/alert";

function Alerts() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Alerts</h3>
      <div className="lui-flex lui-flex-col lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Alert
          variant="success"
          title="Success"
          description="
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
        />
        <Alert variant="success" title="Success" />
        <Alert
          variant="success"
          description="
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
        />
        <Alert
          variant="danger"
          actionType="close"
          alertAction={() => {
            console.log("error");
          }}
          title="Error"
          description="
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
        />
        <Alert
          variant="warning"
          alertAction={() => {
            console.log("warning");
          }}
          title="Warning"
          description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Alert
          variant="info"
          alertAction={() => {
            console.log("info");
          }}
          title="Info"
          description="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default Alerts;
