import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "lui-flex lui-cursor-default lui-select-none lui-items-center lui-rounded-sm lui-px-2 lui-py-1.5 lui-text-sm lui-outline-none focus:lui-bg-slate-100 data-[state=open]:lui-bg-slate-100",
      inset && "lui-pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="lui-ml-auto lui-h-4 lui-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "data-[state=open]:lui-animate-in data-[state=closed]:lui-animate-out data-[state=closed]:lui-fade-out-0 data-[state=open]:lui-fade-in-0 data-[state=closed]:lui-zoom-out-95 data-[state=open]:lui-zoom-in-95 data-[side=bottom]:lui-slide-in-from-top-2 data-[side=left]:lui-slide-in-from-right-2 data-[side=right]:lui-slide-in-from-left-2 data-[side=top]:lui-slide-in-from-bottom-2 lui-z-50 lui-min-w-[8rem] lui-overflow-hidden lui-rounded-md lui-border lui-border-slate-200 lui-bg-white lui-p-1 lui-text-slate-950 lui-shadow-lg",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=open]:lui-animate-in data-[state=closed]:lui-animate-out data-[state=closed]:lui-fade-out-0 data-[state=open]:lui-fade-in-0 data-[state=closed]:lui-zoom-out-95 data-[state=open]:lui-zoom-in-95 data-[side=bottom]:lui-slide-in-from-top-2 data-[side=left]:lui-slide-in-from-right-2 data-[side=right]:lui-slide-in-from-left-2 data-[side=top]:lui-slide-in-from-bottom-2 lui-z-50 lui-min-w-[8rem] lui-overflow-hidden lui-rounded-md lui-border lui-border-slate-200 lui-bg-white lui-p-1 lui-text-slate-950 lui-shadow-md",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "lui-relative lui-flex lui-cursor-default lui-select-none lui-items-center lui-rounded-sm lui-px-2 lui-py-1.5 lui-text-sm lui-outline-none lui-transition-colors focus:lui-bg-slate-100 focus:lui-text-slate-900 data-[disabled]:lui-pointer-events-none data-[disabled]:lui-opacity-50",
      inset && "lui-pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "lui-relative lui-flex lui-cursor-default lui-select-none lui-items-center lui-rounded-sm lui-py-1.5 lui-pl-8 lui-pr-2 lui-text-sm lui-outline-none lui-transition-colors focus:lui-bg-slate-100 focus:lui-text-slate-900 data-[disabled]:lui-pointer-events-none data-[disabled]:lui-opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="lui-absolute lui-left-2 lui-flex lui-h-3.5 lui-w-3.5 lui-items-center lui-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="lui-h-4 lui-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "lui-relative lui-flex lui-cursor-default lui-select-none lui-items-center lui-rounded-sm lui-py-1.5 lui-pl-8 lui-pr-2 lui-text-sm lui-outline-none lui-transition-colors focus:lui-bg-slate-100 focus:lui-text-slate-900 data-[disabled]:lui-pointer-events-none data-[disabled]:lui-opacity-50",
      className,
    )}
    {...props}
  >
    <span className="lui-absolute lui-left-2 lui-flex lui-h-3.5 lui-w-3.5 lui-items-center lui-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="lui-h-2 lui-w-2 lui-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "lui-px-2 lui-py-1.5 lui-text-sm lui-font-semibold",
      inset && "lui-pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("lui--mx-1 lui-my-1 lui-h-px lui-bg-slate-100", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "lui-ml-auto lui-text-xs lui-tracking-widest lui-opacity-60",
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
