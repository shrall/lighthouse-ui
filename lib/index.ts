import "./index.css";

//NOTE - Tailwind Theme
export { default as stylesPlugin } from './stylesPlugin';

//NOTE - Components
//NOTE - v0.1.0
export { Alert } from "./components/ui/alert";
export { Badge } from "./components/ui/badge";
export { Button } from "./components/ui/button";
export type { IconType } from "./components/ui/icon";
export { Icon, IconTypeKeys } from "./components/ui/icon";
export { Toaster, toast } from "./components/ui/sonner";
export { Tooltip } from "./components/ui/tooltip";

//NOTE - v0.2.0
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
export { Input } from "./components/ui/input";
export { Pagination } from "./components/ui/pagination";
export { Skeleton } from "./components/ui/skeleton";
export { Select } from "./components/ui/select";
export { MultiSelect } from "./components/ui/multi-select";
export { Textarea } from "./components/ui/textarea";


//NOTE - Beta
export { Calendar } from "./components/ui/calendar";
export { DataTable } from "./components/ui/data-table";
export {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./components/ui/table";
export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
export { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";