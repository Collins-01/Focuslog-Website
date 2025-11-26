"use client"

import { motion } from "framer-motion"
import { ArrowRight, Timer, Trophy, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/3 rounded-full bg-secondary/5 blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                        Coming Soon to iOS, macOS & Android
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                    >
                        Master Your Focus.
                        <br />
                        <span className="text-primary">Build Better Habits.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    >
                        The all-in-one productivity app that helps you stay focused, track habits,
                        and achieve your goals with gamified progress tracking.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full">
                            View Features
                        </Button>
                    </motion.div>

                    {/* Floating Icons Animation */}
                    <div className="relative w-full max-w-4xl mt-16 h-[300px] md:h-[400px] hidden sm:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl border border-border/50 backdrop-blur-sm"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/20">
                                [App Screenshot Placeholder]
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-4 top-1/4 p-4 rounded-2xl bg-background border shadow-lg"
                        >
                            <Timer className="h-8 w-8 text-primary" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-4 top-1/3 p-4 rounded-2xl bg-background border shadow-lg"
                        >
                            <Trophy className="h-8 w-8 text-yellow-500" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute left-1/4 -bottom-4 p-4 rounded-2xl bg-background border shadow-lg"
                        >
                            <Activity className="h-8 w-8 text-green-500" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
