import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  checkbox: z.boolean(),
});
