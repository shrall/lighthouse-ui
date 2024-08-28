import { DataTable } from "@/components/ui/data-table";
import { columns, Payment } from "./columns";
import { useEffect, useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "328ed52f",
    amount: 320,
    status: "failed",
    email: "x@example.com",
  },
  {
    id: "722ed52f",
    amount: 1040,
    status: "success",
    email: "w@example.com",
  },
  {
    id: "728edf2f",
    amount: 1020,
    status: "pending",
    email: "q@example.com",
  },
];

function Tables() {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    console.log("select", rowSelection);
  }, [rowSelection]);

  useEffect(() => {
    console.log("sort", sorting);
  }, [sorting]);

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Tables</h3>
      <div className="lui-flex lui-flex-col lui-items-center lui-justify-center lui-gap-2 lui-text-center md:lui-flex-row">
        <DataTable
          columns={columns}
          data={data}
          isLoading={true}
          loadingRow={
            <>
              <TableCell>
                <Skeleton className="lui-size-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="lui-h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="lui-h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="lui-h-4" />
              </TableCell>
            </>
          }
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
        />
        <DataTable
          columns={columns}
          data={data}
          isError={true}
          errorRow={
            <TableCell
              colSpan={columns.length}
              className="lui-h-36 lui-gap-2 lui-text-center"
            >
              <div className="lui-flex lui-flex-col">
                <span>Failed to Load Data</span>
                <span
                  onClick={() => {
                    console.log("reload");
                  }}
                  className="lui-mx-auto lui-w-fit lui-cursor-pointer lui-font-semibold lui-text-ocean-primary-10 lui-underline"
                >
                  Reload
                </span>
              </div>
            </TableCell>
          }
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
        />
        <DataTable
          columns={columns}
          data={data}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
        />
      </div>
    </div>
  );
}

export default Tables;
