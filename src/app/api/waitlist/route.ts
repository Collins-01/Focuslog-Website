import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"
import { waitlistSchema } from "@/lib/validations"
import { WelcomeEmail } from "@/components/emails/welcome-email"
import { AdminNotificationEmail } from "@/components/emails/admin-notification-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const json = await req.json()
        const body = waitlistSchema.parse(json)

        // Initialize Supabase client inside the handler to ensure environment variables are available
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
            // Fallback for when Supabase is not configured yet
            console.warn("Supabase credentials missing. Simulating success.")
            return NextResponse.json(
                { message: "Added to waitlist (Simulation Mode)" },
                { status: 200 }
            )
        }

        const supabase = createClient(supabaseUrl, supabaseKey)

        // Insert new entry
        const { error } = await supabase.from("waitlist").insert([
            {
                email: body.email,
                name: body.name,
                platform: body.platform,
                referral_source: body.referral_source,
                metadata: {
                    userAgent: req.headers.get("user-agent"),
                    ip: req.headers.get("x-forwarded-for"),
                },
            },
        ])

        if (error) {
            // Check for unique constraint violation (duplicate email)
            if (error.code === '23505') {
                return NextResponse.json(
                    { message: "You are already on the waitlist!" },
                    { status: 409 }
                )
            }

            console.error("Supabase error:", error)
            return NextResponse.json(
                { message: "Something went wrong. Please try again." },
                { status: 500 }
            )
        }

        // Send emails if Resend API key is present
        if (process.env.RESEND_API_KEY) {
            try {
                // 1. Send Welcome Email to User
                await resend.emails.send({
                    from: "FocusLog <onboarding@resend.dev>", // Update this with your verified domain later
                    to: body.email,
                    subject: "Welcome to the FocusLog Waitlist! 🚀",
                    react: WelcomeEmail({ name: body.name }),
                })

                // 2. Send Notification to Admin
                // Replace 'admin@example.com' with your actual email
                const adminEmail = process.env.ADMIN_EMAIL || "collins@example.com"
                await resend.emails.send({
                    from: "FocusLog Notifications <onboarding@resend.dev>",
                    to: adminEmail,
                    subject: `New Waitlist Signup: ${body.email}`,
                    react: AdminNotificationEmail({
                        email: body.email,
                        name: body.name,
                        platform: body.platform,
                        referral_source: body.referral_source,
                    }),
                })
            } catch (emailError) {
                console.error("Error sending emails:", emailError)
                // Don't fail the request if email sending fails, just log it
            }
        }

        return NextResponse.json(
            { message: "You have been added to the waitlist!" },
            { status: 200 }
        )
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 400 })
        }
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}
