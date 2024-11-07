import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { CrossSmallOutline } from "./icon/CrossSmallOutline";
import { Button } from "./button";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      "lui-fixed lui-inset-0 lui-z-50 lui-bg-ocean-primary-30/40",
      className,
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

interface BaseDrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  locale?: "en" | "id";
  title: string;
  closeOnClickOutside?: boolean;
  confirmAction?: () => void;
}

type DrawerContentProps =
  | (BaseDrawerContentProps & {
      direction?: "bottom";
    })
  | (BaseDrawerContentProps & {
      direction: "left" | "right";
      size?: "small" | "medium";
    });

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(
  (
    {
      className,
      children,
      locale = "en",
      title,
      closeOnClickOutside = false,
      direction = "bottom",
      confirmAction,
      ...props
    },
    ref,
  ) => {
    const sideDrawerSize =
      direction === "left" || direction === "right"
        ? (props as { size?: "small" | "medium" }).size || "medium"
        : undefined;

    return (
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
          ref={ref}
          className={cn(
            "lui-fixed lui-flex lui-flex-col",
            "lui-border lui-border-slate-200",
            "lui-bg-white lui-font-bca",
            direction === "bottom" && "lui-inset-x-0 lui-bottom-0 lui-z-50",
            direction === "left" && "lui-inset-y-0 lui-left-0 lui-z-50",
            direction === "right" && "lui-inset-y-0 lui-right-0 lui-z-50",
            direction === "bottom" && "lui-rounded-t-[10px]",
            direction === "left" && "lui-rounded-r-[10px]",
            direction === "right" && "lui-rounded-l-[10px]",
            direction === "bottom" && "lui-mt-24 lui-h-auto",
            (direction === "left" || direction === "right") &&
              sideDrawerSize === "small" &&
              "lui-w-[22.5rem]",
            (direction === "left" || direction === "right") &&
              sideDrawerSize === "medium" &&
              "lui-w-[37.5rem]",
            className,
          )}
          {...props}
          onPointerDownOutside={(e) => {
            if (!closeOnClickOutside) {
              e.preventDefault();
            }
          }}
        >
          <div className="lui-flex lui-w-full lui-items-center lui-justify-between lui-border-b lui-border-ocean-light-30 lui-p-4">
            <h3 className="lui-text-lg lui-font-bold lui-text-ocean-primary-20">
              {title}
            </h3>
            <DrawerClose>
              <CrossSmallOutline className="lui-cursor-pointer lui-text-ocean-dark-10" />
            </DrawerClose>
          </div>
          <div className="lui-m-4 lui-overflow-y-auto">{children}</div>
          {confirmAction && (
            <div className="lui-flex lui-items-center lui-justify-end lui-gap-x-6 lui-p-4">
              <DrawerClose>
                <Button
                  variant="ghost"
                  size="large"
                  className="lui-w-fit lui-min-w-0"
                >
                  {locale === "en" ? "Cancel" : "Batal"}
                </Button>
              </DrawerClose>
              <Button
                onClick={confirmAction}
                size="large"
                className="lui-w-fit lui-min-w-0"
              >
                {locale === "en" ? "Confirm" : "Konfirmasi"}
              </Button>
            </div>
          )}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    );
  },
);
DrawerContent.displayName = "DrawerContent";

export { Drawer, DrawerTrigger, DrawerContent };
