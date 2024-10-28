import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  checkbox: z
    .boolean()
    .refine((value) => value === true, { message: "Checkbox must be checked" }),
  role: z.string().min(1, { message: "Role is required" }),
  hobbies: z.array(z.string()).min(1, { message: "Hobbies are required" }),
});
