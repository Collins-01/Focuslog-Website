"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Set Your Goals",
        description: "Create tasks you want to accomplish and habits you want to build.",
    },
    {
        number: "02",
        title: "Start Your Session",
        description: "Use our smart timers to stay focused and block out distractions.",
    },
    {
        number: "03",
        title: "Track Your Progress",
        description: "View detailed analytics and unlock achievements as you grow.",
    },
]

export function HowItWorks() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        How it works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Simple steps to a more productive you.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative bg-background pt-4 md:pt-0"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-primary text-3xl font-bold text-primary-foreground mb-6 shadow-lg">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground max-w-xs">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
