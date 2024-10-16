import { ForwardedRef, forwardRef } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues>
  extends Omit<React.ComponentPropsWithoutRef<"form">, "onSubmit"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const FormComponent = <T extends FieldValues>(
  { children, form, onSubmit, ...props }: FormProps<T>,
  ref: ForwardedRef<HTMLFormElement>,
) => (
  <FormProvider {...form}>
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit(onSubmit);
      }}
      {...props}
    >
      {children}
    </form>
  </FormProvider>
);

const Form = forwardRef(FormComponent) as <T extends FieldValues>(
  props: FormProps<T> & { ref?: ForwardedRef<HTMLFormElement> },
) => React.ReactElement;

export default Form;
