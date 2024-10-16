import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "./components/FormInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema/form";
import Form from "./components/Form";
import { FormCheckbox } from "./components/FormCheckbox";

interface FormPageProps {}

interface FormData {
  name: string;
  checkbox: boolean;
}

const FormPage: React.FC<FormPageProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      checkbox: false,
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmittedData(data);
  };

  return (
    <div className="lui-flex lui-min-h-screen lui-items-center lui-justify-center">
      <Card className="lui-w-full lui-max-w-5xl">
        <CardHeader>
          <CardTitle>Form</CardTitle>
        </CardHeader>
        <CardContent className="lui-grid lui-w-full lui-grid-cols-2 lui-gap-x-4">
          <Form
            form={form}
            onSubmit={onSubmit}
            className="lui-flex lui-flex-col lui-gap-y-4"
          >
            <FormInput
              control={form.control}
              name="name"
              placeholder="Name"
              label="Name"
              ref={inputRef}
            />
            <FormCheckbox
              control={form.control}
              name="checkbox"
              label={{ text: "Checkbox" }}
            />
            <Button type="submit">Submit</Button>
          </Form>
          <div>
            <div>
              <h1>Submitted Data</h1>
              {submittedData && <p>{JSON.stringify(submittedData)}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
