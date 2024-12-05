"use client";

import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  TableOptions,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";
import React, { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";

declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

interface DataTableProps<TData, TValue> {
  locale?: "en" | "id";
  className?: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  loadingRow?: React.ReactNode;
  isError?: boolean;
  refetch?: () => void;
  rowSelection?: Record<number, boolean>;
  setRowSelection?: Dispatch<SetStateAction<Record<number, boolean>>>;
  sorting?: SortingState;
  setSorting?: Dispatch<SetStateAction<SortingState>>;
  hideHeaderOnMobile?: boolean;
  globalFilter?: string;
  setGlobalFilter?: Dispatch<SetStateAction<string>>;
  tableOptions?: TableOptions<TData>;
  tableProps?: React.ComponentPropsWithoutRef<typeof Table>;
  tableHeaderProps?: React.ComponentPropsWithoutRef<typeof TableHeader>;
  tableBodyProps?: React.ComponentPropsWithoutRef<typeof TableBody>;
  tableCellProps?: React.ComponentPropsWithoutRef<typeof TableCell>;
  tableHeadProps?: React.ComponentPropsWithoutRef<typeof TableHead>;
  tableRowProps?: React.ComponentPropsWithoutRef<typeof TableRow>;
  withPagination?: boolean;
  paginationProps?: Partial<React.ComponentPropsWithoutRef<typeof Pagination>>;
  serverPagination?: boolean;
}

export function DataTable<TData, TValue>({
  locale = "en",
  className,
  columns,
  data,
  isLoading,
  loadingRow,
  isError,
  refetch = () => {},
  rowSelection,
  setRowSelection,
  sorting,
  setSorting,
  hideHeaderOnMobile = false,
  globalFilter,
  setGlobalFilter,
  tableOptions,
  tableProps,
  tableHeaderProps,
  tableBodyProps,
  tableCellProps,
  tableHeadProps,
  tableRowProps,
  withPagination,
  paginationProps,
  serverPagination,
}: DataTableProps<TData, TValue>) {
  const [defaultRowSelection, setDefaultRowSelection] = useState({});
  const [defaultSorting, setDefaultSorting] = useState<SortingState>([]);
  const [defaultGlobalFilter, setDefaultGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection ?? setDefaultRowSelection,
    onSortingChange: setSorting ?? setDefaultSorting,
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter ?? setDefaultGlobalFilter,
    state: {
      sorting: sorting ?? defaultSorting,
      rowSelection: rowSelection ?? defaultRowSelection,
      globalFilter: globalFilter ?? defaultGlobalFilter,
    },
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: serverPagination,
    ...tableOptions,
  });

  const [searchPageNumber, setSearchPageNumber] = useState<
    number | undefined
  >();

  return (
    <>
      <div className={cn("lui-rounded-md lui-border", className)}>
        <Table {...tableProps}>
          <TableHeader
            {...tableHeaderProps}
            className={cn(
              hideHeaderOnMobile && "lui-hidden md:lui-table-header-group",
              tableHeaderProps?.className,
            )}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} {...tableRowProps}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} {...tableHeadProps}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody
            {...tableBodyProps}
            className={cn(
              table.getRowModel().rows?.length && tableBodyProps?.className,
            )}
          >
            {isLoading ? (
              //NOTE - Loading State
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>{loadingRow}</TableRow>
              ))
            ) : isError ? (
              //NOTE - Error State
              <TableRow className="lui-border-none hover:lui-bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="lui-h-full lui-min-h-36 lui-py-9 lui-text-center lui-align-middle"
                >
                  <div className="lui-flex lui-flex-col lui-gap-y-3">
                    <span>
                      {locale === "en"
                        ? "Failed to load data"
                        : "Gagal memuat data"}
                    </span>
                    <span
                      onClick={() => {
                        refetch();
                      }}
                      className="lui-mx-auto lui-w-fit lui-cursor-pointer lui-font-semibold lui-text-ocean-primary-10 hover:lui-text-ocean-primary-30"
                    >
                      {locale === "en" ? "Reload" : "Muat Ulang"}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              //NOTE - Data State
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  {...tableRowProps}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} {...tableCellProps}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              //NOTE - Empty State
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {locale === "en"
                    ? "No results found"
                    : "Data tidak ditemukan"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {withPagination && (
        <Pagination
          pageSize={table.getState().pagination.pageSize ?? 10}
          setPageSize={table.setPageSize}
          pageNumber={table.getState().pagination.pageIndex + 1}
          setPageNumber={(pageNumber) => {
            table.setPageIndex(pageNumber - 1);
          }}
          searchPageNumber={searchPageNumber}
          setSearchPageNumber={setSearchPageNumber}
          totalPage={table.getPageCount()}
          totalData={table.getRowCount()}
          {...paginationProps}
        />
      )}
    </>
  );
}
