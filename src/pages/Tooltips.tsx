import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";

function Tooltips() {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-2">
      <h3>Tooltips</h3>
      <div className="flex items-center gap-2 text-center">
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
          side="right"
          title="Tooltip Title"
          image={
            <div className="size-16 min-w-16 rounded-lg bg-ocean-dark-10 md:size-44 md:min-w-44" />
          }
          forceOpen={true}
        >
          <ol className="list-decimal space-y-1 pl-4 font-normal">
            <li>
              <div>Silakan aktifkan KeyBCA dengan</div>
              <div className="flex items-center gap-x-1">
                menekan tombol
                <Icon name="triangle-left-filled" className="size-5" />
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
