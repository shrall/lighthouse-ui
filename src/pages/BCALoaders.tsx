import { BCALoader } from "@/components/ui/bca-loader";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function BCALoaders() {
  const [show, setShow] = useState(false);
  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>BCA Loader</h3>
      <div className="lui-grid lui-grid-cols-4 lui-items-center lui-justify-center lui-gap-2 lui-text-center sm:lui-grid-cols-5">
        <Button onClick={() => setShow(!show)}>Toggle</Button>
        {show && <BCALoader />}
      </div>
    </div>
  );
}

export default BCALoaders;
