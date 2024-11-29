import { Textarea } from "@/components/ui/textarea";
import { QuestionFilled } from "@/components/ui/icon/QuestionFilled";
import { TooltipText } from "@/index";

function Textareas() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Textareas</h3>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea
          inputStyle="outline"
          label="Textarea"
          placeholder="Type your message here."
          maxLength={10}
          showCharacterCount
        />
        <Textarea
          inputStyle="underline"
          placeholder="Type your message here."
          label="Label w/TooltipText"
          tooltip={
            <TooltipText
              title="TooltipText Title"
              description="
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor."
            >
              <QuestionFilled className="lui-text-ocean-primary-10" />
            </TooltipText>
          }
        />
        <Textarea
          inputStyle="underline"
          label="Textarea"
          placeholder="Type your message here."
          disabled
        />
      </div>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea
          inputStyle="underline"
          label="Textarea"
          placeholder="Type your message here."
          alignment="horizontal"
        />
        <Textarea
          inputStyle="underline"
          placeholder="Type your message here."
          alignment="horizontal"
          label="Label w/TooltipText"
          tooltip={
            <TooltipText
              title="TooltipText Title"
              description="
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor."
            >
              <QuestionFilled className="lui-text-ocean-primary-10" />
            </TooltipText>
          }
        />
      </div>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea
          inputStyle="underline"
          label="Textarea"
          placeholder="Type your message here."
          helperText="Helper Text"
        />
        <Textarea
          inputStyle="underline"
          label="Textarea"
          placeholder="Type your message here."
          errorMessage="Error message"
        />
      </div>

      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea
          id="asd"
          label="Textarea"
          placeholder="Type your message here."
          regex={{ type: "number" }}
        />
        <Textarea
          placeholder="Type your message here."
          label="Label w/TooltipText"
          tooltip={
            <TooltipText
              title="TooltipText Title"
              description="
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor."
            >
              <QuestionFilled className="lui-text-ocean-primary-10" />
            </TooltipText>
          }
        />
        <Textarea
          label="Textarea"
          placeholder="Type your message here."
          disabled
        />
      </div>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea
          label="Textarea"
          placeholder="Type your message here."
          alignment="horizontal"
        />
        <Textarea
          placeholder="Type your message here."
          alignment="horizontal"
          label="Label w/TooltipText"
          tooltip={
            <TooltipText
              title="TooltipText Title"
              description="
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor."
            >
              <QuestionFilled className="lui-text-ocean-primary-10" />
            </TooltipText>
          }
        />
      </div>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea
          label="Textarea"
          placeholder="Type your message here."
          helperText="Helper Text"
        />
        <Textarea
          label="Textarea"
          placeholder="Type your message here."
          errorMessage="Error message"
        />
      </div>
    </div>
  );
}

export default Textareas;
