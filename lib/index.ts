import "./index.css";

//NOTE - Tailwind Theme
export { default as stylesPlugin } from './stylesPlugin';

//NOTE - Components
//NOTE - v0.1.0
export { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
export { Badge } from "./components/ui/badge";
export { Button } from "./components/ui/button";
export type { IconType } from "./components/ui/icon";
export { Icon, IconTypeKeys } from "./components/ui/icon";
export { Toaster } from "./components/ui/sonner";
export { Tooltip } from "./components/ui/tooltip";

//NOTE - Beta
export {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card";
export { Checkbox } from "./components/ui/checkbox";
export { Chip } from "./components/ui/chip";
export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
export { Input } from "./components/ui/input";
// export { Pagination } from "./components/ui/pagination";
// export { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
// export { Calendar } from "./components/ui/calendar";
// export { DataTable } from "./components/ui/data-table";
// export { Skeleton } from "./components/ui/skeleton";
// export {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "./components/ui/table";