import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { waitlistSchema } from "@/lib/validations"

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

        // Check for existing email
        const { data: existing } = await supabase
            .from("waitlist")
            .select("email")
            .eq("email", body.email)
            .single()

        if (existing) {
            return NextResponse.json(
                { message: "You are already on the waitlist!" },
                { status: 409 }
            )
        }

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
            console.error("Supabase error:", error)
            return NextResponse.json(
                { message: "Something went wrong. Please try again." },
                { status: 500 }
            )
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
