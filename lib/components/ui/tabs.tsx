import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  listProps?: TabsListProps;
  triggerProps?: TabsTriggerProps;
  tabMenus: TabMenu[];
  selectedTab?: string;
  setSelectedTab?: React.Dispatch<React.SetStateAction<string>>;
  tabsStyle?: "underline" | "filled";
  size?: "medium" | "large";
};

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(
  (
    {
      children,
      listProps,
      triggerProps,
      tabMenus,
      tabsStyle = "underline",
      size = "medium",
      selectedTab,
      setSelectedTab,
      ...props
    },
    ref,
  ) => (
    <TabsPrimitive.Root
      ref={ref}
      {...props}
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      <TabsList tabsStyle={tabsStyle} size={size} {...listProps}>
        {tabMenus.map((tabMenu) => (
          <TabsTrigger
            key={tabMenu.value}
            tabsStyle={tabsStyle}
            size={size}
            value={tabMenu.value}
            disabled={tabMenu.disabled}
            {...triggerProps}
          >
            {tabMenu.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </TabsPrimitive.Root>
  ),
);

type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> & {
  tabsStyle: "underline" | "filled";
  size: "medium" | "large";
};

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, tabsStyle, size, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "lui-inline-flex lui-font-semibold",
      size === "medium" && "lui-text-sm",
      size === "large" && "lui-text-base",
      tabsStyle === "filled" && size === "medium" && "lui-px-1 lui-py-[5px]",
      tabsStyle === "filled" && size === "large" && "lui-p-1.5",
      tabsStyle === "filled" &&
        "lui-items-center lui-justify-center lui-gap-x-2 lui-rounded-xl lui-bg-ocean-secondary-10",
      tabsStyle === "underline" && "lui-border-b lui-border-ocean-light-30",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  tabsStyle: "underline" | "filled";
  size: "medium" | "large";
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, children, tabsStyle, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "lui-group lui-flex-1 lui-items-center lui-justify-center",
      "lui-transition-all focus-visible:lui-outline-none",
      "disabled:lui-pointer-events-none disabled:lui-text-ocean-light-40",
      tabsStyle === "filled" && size === "medium" && "lui-py-[7.5px]",
      tabsStyle === "filled" && size === "large" && "lui-py-2",
      tabsStyle === "filled" &&
        "lui-inline-flex lui-rounded-[10px] data-[state=active]:lui-bg-ocean-primary-10 data-[state=active]:lui-text-ocean-light-10",
      tabsStyle === "underline" &&
        "lui-flex lui-flex-col data-[state=active]:lui-text-ocean-primary-10",
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        "lui-my-auto lui-line-clamp-2 lui-px-6",
        tabsStyle === "underline" && "lui-my-3",
      )}
    >
      {children}
    </span>
    {tabsStyle === "underline" && (
      <div className="lui-min-h-1 lui-w-full lui-rounded-t lui-border-ocean-primary-10 lui-bg-ocean-primary-10 group-data-[state=inactive]:lui-invisible" />
    )}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export type TabMenu = {
  name: string;
  value: string;
  disabled?: boolean;
};

export { Tabs };
