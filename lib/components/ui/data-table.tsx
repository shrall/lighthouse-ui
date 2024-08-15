"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { Dispatch, SetStateAction, useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  loadingRow?: React.ReactNode;
  isError?: boolean;
  errorRow?: React.ReactNode;
  rowSelection?: Record<number, boolean>;
  setRowSelection?: Dispatch<SetStateAction<Record<number, boolean>>>;
  sorting?: SortingState;
  setSorting?: Dispatch<SetStateAction<SortingState>>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  loadingRow,
  isError,
  errorRow,
  rowSelection,
  setRowSelection,
  sorting,
  setSorting,
}: DataTableProps<TData, TValue>) {
  const [defaultRowSelection, setDefaultRowSelection] = useState({});
  const [defaultsorting, setDefaultSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection
      ? setRowSelection
      : setDefaultRowSelection,
    onSortingChange: setSorting ? setSorting : setDefaultSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting || defaultsorting,
      rowSelection: rowSelection || defaultRowSelection,
    },
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
        <TableBody>
          {isLoading ? (
            //NOTE - Loading State
            Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>{loadingRow}</TableRow>
            ))
          ) : isError ? (
            //NOTE - Error State
            <TableRow className="lui-border-none hover:lui-bg-transparent">
              {errorRow}
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            //NOTE - Data State
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            //NOTE - Empty State
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
