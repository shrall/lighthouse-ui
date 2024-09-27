import { DataTable } from "@/components/ui/data-table";
import {
  columns,
  mobileColumns,
  mobileColumnsWithoutCheckbox,
  Payment,
} from "./columns";
import { useState } from "react";
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
      <div className="lui-grid lui-grid-cols-1 lui-gap-2 lui-text-center md:lui-grid-cols-3">
        <DataTable
          columns={mobileColumns}
          data={data}
          isLoading={true}
          loadingRow={
            <>
              <TableCell>
                <Skeleton className="lui-size-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="lui-h-4" />
                <Skeleton className="lui-h-4" />
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
          columns={mobileColumns}
          data={data}
          isError={true}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
        />
        <DataTable
          columns={mobileColumns}
          data={data}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
        />
      </div>
      <div className="lui-grid lui-grid-cols-1 lui-gap-2 lui-text-center md:lui-grid-cols-3">
        <DataTable
          columns={mobileColumnsWithoutCheckbox}
          data={data}
          isLoading={true}
          loadingRow={
            <TableCell>
              <Skeleton className="lui-h-4" />
              <Skeleton className="lui-h-4" />
              <Skeleton className="lui-h-4" />
            </TableCell>
          }
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
          hideHeaderOnMobile
        />
        <DataTable
          columns={mobileColumnsWithoutCheckbox}
          data={data}
          isError={true}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
          hideHeaderOnMobile
        />
        <DataTable
          columns={mobileColumnsWithoutCheckbox}
          data={data}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          sorting={sorting}
          setSorting={setSorting}
          hideHeaderOnMobile
        />
      </div>
    </div>
  );
}

export default Tables;
