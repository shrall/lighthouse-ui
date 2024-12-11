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
import { Input } from "@/components/ui/input";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "328ed52f",
    amount: 320,
    status: "failed",
    email: "x@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "722ed52f",
    amount: 1040,
    status: "success",
    email: "w@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728edf2f",
    amount: 1020,
    status: "pending",
    email: "q@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52g",
    amount: 550,
    status: "success",
    email: "r@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52h",
    amount: 299,
    status: "pending",
    email: "s@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52i",
    amount: 799,
    status: "failed",
    email: "t@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52j",
    amount: 1299,
    status: "success",
    email: "u@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52k",
    amount: 449,
    status: "pending",
    email: "v@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52l",
    amount: 899,
    status: "success",
    email: "y@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52m",
    amount: 649,
    status: "failed",
    email: "z@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52n",
    amount: 1499,
    status: "success",
    email: "a@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52o",
    amount: 349,
    status: "pending",
    email: "b@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
  {
    id: "728ed52p",
    amount: 749,
    status: "success",
    email: "c@example.com",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    pic_name: "John Doe",
    pic_email: "john@example.com",
    pic_phone: "1234567890",
  },
];

function Tables() {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState("");

  //NOTE - Pagination
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchPageNumber, setSearchPageNumber] = useState<
    number | undefined
  >();

  return (
    <div className="lui-flex lui-flex-col lui-gap-y-4 lui-px-4 lui-py-2">
      <h3>Tables</h3>
      <div className="lui-flex lui-flex-col lui-items-center lui-justify-center lui-gap-2 lui-text-center md:lui-grid md:lui-grid-cols-3">
        <DataTable
          columns={columns}
          data={[]}
          isError={true}
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
        <div className="lui-flex lui-w-full lui-flex-col lui-gap-y-2">
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DataTable
            columns={columns}
            data={data.slice(
              (pageNumber - 1) * pageSize,
              pageSize * pageNumber,
            )}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            sorting={sorting}
            setSorting={setSorting}
            globalFilter={search}
            setGlobalFilter={setSearch}
            withPagination
            serverPagination
            paginationProps={{
              pageSize,
              setPageSize,
              pageNumber,
              setPageNumber,
              searchPageNumber,
              setSearchPageNumber,
              totalData: data.length,
              totalPage: Math.ceil(data.length / pageSize),
            }}
            enableFuzzyFilter={false}
          />
        </div>
        <div className="lui-flex lui-w-full lui-flex-col lui-gap-y-2">
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <DataTable
            columns={columns}
            data={[]}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            sorting={sorting}
            setSorting={setSorting}
            globalFilter={search}
            setGlobalFilter={setSearch}
            withPagination
          />
        </div>
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
