import { Icon } from "@/components/ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTitle,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Tooltips() {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-2">
      <h3>Tooltips</h3>
      <div className="flex items-center gap-2 text-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Icon name="question-filled" />
            </TooltipTrigger>
            <TooltipContent>
              <TooltipTitle>Title Tooltip</TooltipTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Icon name="question-filled" />
            </TooltipTrigger>
            <TooltipContent side="left">
              <TooltipTitle>Title Tooltip</TooltipTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Icon name="question-filled" />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <TooltipTitle>Title Tooltip</TooltipTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Icon name="question-filled" />
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-[228px]">
              <TooltipTitle>Title Tooltip</TooltipTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Icon name="question-filled" />
            </TooltipTrigger>
            <TooltipContent>
              <TooltipTitle>Title Tooltip</TooltipTitle>
              <div className="flex flex-col items-center gap-y-6">
                <div className="flex items-center gap-x-6">
                  <div className="size-44 min-w-44 rounded-lg bg-ocean-dark-10" />
                  <ol className="max-w-[228px] list-decimal space-y-1 font-normal">
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
                      Masukkan angka yang tertera pada KeyBCA pada kolom "Respon
                      KeyBCA Appli 1" di layar.
                    </li>
                  </ol>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default Tooltips;
