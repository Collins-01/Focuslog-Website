import { z } from "zod"

export const waitlistSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    name: z.string().optional(),
    platform: z.enum(["ios", "macos", "android"]).optional(),
    referral_source: z.string().optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>
