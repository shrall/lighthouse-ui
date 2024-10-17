import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  checkbox: z.boolean(),
  role: z.string().min(1, { message: "Role is required" }),
});
