import "./index.css";

//NOTE - Tailwind Theme
export { default as stylesPlugin } from './stylesPlugin';

//NOTE - Components
export { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
export { Badge } from "./components/ui/badge";
export { Button } from "./components/ui/button";
export {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card";
export type { IconType } from "./components/ui/icon";
export { Icon, IconTypeKeys } from "./components/ui/icon";
export { Toaster } from "./components/ui/sonner";
export {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTitle,
    TooltipTrigger,
} from "./components/ui/tooltip";