import { forwardRef, ComponentPropsWithoutRef } from "react";

interface ButtonTwoProps extends ComponentPropsWithoutRef<"button"> {
  leftNode?: React.ReactNode;
}

const ButtonTwo = forwardRef<HTMLButtonElement, ButtonTwoProps>(
  ({ children, leftNode, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {leftNode && leftNode}
        {children}
      </button>
    );
  },
);

ButtonTwo.displayName = "ButtonTwo";

export { ButtonTwo };
