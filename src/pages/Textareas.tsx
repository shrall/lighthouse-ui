import { Textarea } from "@/components/ui/textarea";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";

function Textareas() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Textareas</h3>
      <div className="lui-grid lui-grid-cols-3 lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Textarea label="Textarea" placeholder="Type your message here." />
        <Textarea
          placeholder="Type your message here."
          label="Label w/Tooltip"
          tooltip={
            <Tooltip
              trigger={
                <Icon
                  name="question-filled"
                  className="lui-text-ocean-primary-10"
                />
              }
              side="top"
              title="Tooltip Title"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </Tooltip>
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
          label="Label w/Tooltip"
          tooltip={
            <Tooltip
              trigger={
                <Icon
                  name="question-filled"
                  className="lui-text-ocean-primary-10"
                />
              }
              side="top"
              title="Tooltip Title"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </Tooltip>
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
