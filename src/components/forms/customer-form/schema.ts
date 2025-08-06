import z from "zod";

export const customerSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters")
    .trim(),
  regNo: z
    .string()
    .min(1, "Registration number is required")
    .max(50, "Registration number must be less than 50 characters")
    .trim()
    .toLowerCase(),
  mobileNo: z.string().min(10, "Mobile number is required").trim(),
  modelName: z
    .string()
    .min(1, "Model name is required")
    .max(100, "Model name must be less than 50 characters")
    .trim(),
});
export type Customer = z.infer<typeof customerSchema>;
