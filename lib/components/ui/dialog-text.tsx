import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import {
  Dialog,
  DialogContent,
  DialogContentProps,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type DialogTextProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
> &
  DialogPrimitive.DialogProps & {
    title: string;
    description?: string;
    contentProps?: DialogContentProps;
    buttons?: {
      primary: {
        text: string;
        onClick: () => void;
        props?: React.ComponentPropsWithoutRef<typeof Button>;
      };
      secondary?: {
        text: string;
        onClick: () => void;
        props?: React.ComponentPropsWithoutRef<typeof Button>;
      };
    };
  };

const DialogText = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTextProps
>(
  (
    {
      open,
      onOpenChange,
      defaultOpen,
      modal,
      children,
      contentProps,
      title,
      description,
      buttons,
      ...props
    },
    ref,
  ) => (
    <Dialog
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <DialogTrigger ref={ref} {...props}>
        {children}
      </DialogTrigger>
      <DialogContent {...contentProps}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : (
            <DialogDescription className="lui-hidden">
              {title}
            </DialogDescription>
          )}
        </DialogHeader>
        {buttons && (
          <DialogFooter>
            {buttons.secondary && (
              <Button
                onClick={buttons.secondary.onClick}
                variant="secondary"
                className={cn("lui-w-full", buttons.secondary.props?.className)}
                {...buttons.secondary.props}
              >
                {buttons.secondary.text}
              </Button>
            )}
            <Button
              onClick={buttons.primary.onClick}
              className={cn("lui-w-full", buttons.primary.props?.className)}
              {...buttons.primary.props}
            >
              {buttons.primary.text}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  ),
);

export { DialogText };
