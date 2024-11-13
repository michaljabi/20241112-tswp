import { z } from "zod";

export const testimonialSchema = z.object({
    token: z.string(),
    email: z.string().email(),
    rating: z.number().min(1).max(5),
    opinion: z.string().optional()
});

export type TestimonialDto = z.infer<typeof testimonialSchema>;
