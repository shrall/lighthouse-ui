import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "./components/FormInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./schema/form";

interface FormPageProps {}

interface FormData {
  name: string;
}

const FormPage: React.FC<FormPageProps> = () => {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const { control, handleSubmit } = useForm<FormData>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <div className="lui-flex lui-min-h-screen lui-items-center lui-justify-center">
      <Card className="lui-w-full lui-max-w-5xl">
        <CardHeader>
          <CardTitle>Form</CardTitle>
        </CardHeader>
        <CardContent className="lui-grid lui-w-full lui-grid-cols-2 lui-gap-x-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lui-flex lui-flex-col lui-gap-y-4"
          >
            <FormInput
              control={control}
              name="name"
              placeholder="Name"
              label="Name"
            />
            <Button type="submit">Submit</Button>
          </form>
          <div>
            <div>
              <h1>Submitted Data</h1>
              {submittedData && <p>{submittedData.name}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
