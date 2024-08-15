import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="lui-flex lui-cursor-pointer lui-items-center lui-gap-x-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <Icon name="sort-outline" size={16} />
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          className="lui-flex lui-cursor-pointer lui-items-center lui-gap-x-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <Icon name="sort-outline" size={16} />
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
