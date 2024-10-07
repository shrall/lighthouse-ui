import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "lui-flex lui-h-full lui-w-full lui-flex-col lui-overflow-hidden lui-rounded-md",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="lui-overflow-hidden lui-p-0 lui-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:lui-px-2 [&_[cmdk-group-heading]]:lui-font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:lui-pt-0 [&_[cmdk-group]]:lui-px-2 [&_[cmdk-input-wrapper]_svg]:lui-h-5 [&_[cmdk-input-wrapper]_svg]:lui-w-5 [&_[cmdk-input]]:lui-h-12 [&_[cmdk-item]]:lui-px-2 [&_[cmdk-item]]:lui-py-3 [&_[cmdk-item]_svg]:lui-h-5 [&_[cmdk-item]_svg]:lui-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="lui-flex lui-items-center lui-border-b lui-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="lui-mr-2 lui-h-4 lui-w-4 lui-shrink-0 lui-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "lui-flex lui-h-11 lui-w-full lui-rounded-md lui-bg-transparent lui-py-3 lui-text-sm lui-outline-none disabled:lui-cursor-not-allowed disabled:lui-opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "lui-max-h-[300px] lui-overflow-y-auto lui-overflow-x-hidden",
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="lui-py-5 lui-text-center lui-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "lui-overflow-hidden lui-p-1 [&_[cmdk-group-heading]]:lui-px-2 [&_[cmdk-group-heading]]:lui-py-1.5 [&_[cmdk-group-heading]]:lui-text-xs [&_[cmdk-group-heading]]:lui-font-medium",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("lui--mx-1 lui-h-px", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "lui-relative lui-flex lui-cursor-default lui-select-none lui-items-center lui-rounded-sm lui-px-2 lui-py-1.5 lui-text-sm lui-outline-none data-[disabled=true]:lui-pointer-events-none",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("lui-ml-auto lui-text-xs lui-tracking-widest", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
