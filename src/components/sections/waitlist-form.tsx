"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Loader2, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations"

export function WaitlistForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<WaitlistFormData>({
        resolver: zodResolver(waitlistSchema),
        defaultValues: {
            platform: "ios",
        },
    })

    const onSubmit = async (data: WaitlistFormData) => {
        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong")
            }

            setIsSubmitted(true)
            toast.success("Welcome to the waitlist!", {
                description: "We'll notify you when FocusLog is ready.",
            })
            reset()
        } catch (error) {
            if (error instanceof Error) {
                toast.error("Error", {
                    description: error.message,
                })
            } else {
                toast.error("Error", {
                    description: "Something went wrong. Please try again.",
                })
            }
        }
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 text-center bg-secondary/10 rounded-2xl border border-border/50"
            >
                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground max-w-md">
                    Thank you for joining. We'll send you an email as soon as FocusLog is ready for beta testing.
                </p>
                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                >
                    Join with another email
                </Button>
            </motion.div>
        )
    }

    return (
        <section id="waitlist" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Be the First to Experience FocusLog
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Join our waitlist and get early access when we launch.
                    </p>
                </div>

                <div className="max-w-md mx-auto bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                placeholder="Enter your email address"
                                type="email"
                                className="h-12"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Input
                                placeholder="Your Name (Optional)"
                                className="h-12"
                                {...register("name")}
                            />
                        </div>

                        <div className="space-y-2">
                            <select
                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("platform")}
                            >
                                <option value="ios">iOS (iPhone/iPad)</option>
                                <option value="macos">macOS</option>
                                <option value="android">Android</option>
                            </select>
                        </div>

                        <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Joining...
                                </>
                            ) : (
                                "Join Waitlist"
                            )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            We respect your privacy. No spam, ever.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}
