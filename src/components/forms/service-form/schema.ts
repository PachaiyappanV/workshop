import z from "zod";

export const serviceSchema = z.object({
  serviceType: z
    .string()
    .min(1, "Service type is required")
    .max(1000, "Service type must be less than 1000 characters")
    .trim(),
  serviceDate: z.string().min(1, "Service date is required").trim(),
  expiryDate: z.string().trim(),
  serviceKM: z.string().trim(),
  nextServiceKM: z.string().trim(),
  sparesDetails: z.string().max(1000).trim(),
  sparesAmount: z.coerce.number(),
  serviceCharge: z.coerce.number(),
  totalCost: z.coerce.number(),
});

export type Service = z.infer<typeof serviceSchema>;
