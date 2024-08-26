import { Pagination } from "@/components/ui/pagination";
import { useState } from "react";

function Paginations() {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchPageNumber, setSearchPageNumber] = useState<
    number | undefined
  >();
  const [totalData] = useState(100);

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Paginations</h3>
      <div className="lui-flex lui-items-center lui-gap-2">
        <Pagination
          className="lui-w-full"
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          searchPageNumber={searchPageNumber}
          setSearchPageNumber={setSearchPageNumber}
          totalPage={Math.ceil(totalData / pageSize)}
          totalData={totalData}
        />
      </div>
    </div>
  );
}

export default Paginations;
