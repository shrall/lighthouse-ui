import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";

function Tooltips() {
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Tooltips</h3>
      <div className="lui-flex lui-items-center lui-justify-center lui-gap-2 lui-text-center">
        <Tooltip
          trigger={<Icon name="question-filled" />}
          side="top"
          title="Tooltip Title"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </Tooltip>
        <Tooltip
          trigger={<Icon name="question-filled" />}
          side="top"
          title="Tooltip Title"
          align="start"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </Tooltip>
        <Tooltip
          trigger={<Icon name="question-filled" />}
          side="top"
          title="Tooltip Title"
          align="end"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </Tooltip>
        <Tooltip
          trigger={<Icon name="question-filled" />}
          side="right"
          title="lorem ipsumasdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaaasdaaaaaaaaaaaaaaaaa"
          image={
            <div className="lui-size-16 lui-min-w-16 lui-rounded-lg lui-bg-ocean-dark-10 md:lui-size-44 md:lui-min-w-44" />
          }
        >
          <ol className="lui-list-decimal lui-space-y-1 lui-pl-4 lui-font-normal">
            <li>
              <div>Silakan aktifkan KeyBCA dengan</div>
              <div className="lui-flex lui-items-center lui-gap-x-1">
                menekan tombol
                <Icon name="triangle-left-filled" className="lui-size-5" />
              </div>
            </li>
            <li>Masukkan PIN KeyBCA pada saat muncul pesan “PIN”</li>
            <li>Tekan tombol “1” pada saat muncul pesan “APPLI”</li>
            <li>
              Masukkan angka yang tertera pada KeyBCA pada kolom "Respon KeyBCA
              Appli 1" di layar.
            </li>
          </ol>
        </Tooltip>
      </div>
    </div>
  );
}

export default Tooltips;
