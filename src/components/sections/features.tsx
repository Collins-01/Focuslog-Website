"use client"

import { motion } from "framer-motion"
import { Timer, CheckCircle2, Trophy, BarChart3, Smartphone, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        icon: Timer,
        title: "Focus Sessions That Work",
        description: "iOS-style timers with Live Activities, completion alerts, and session tracking to keep you in the zone.",
        color: "text-blue-500",
    },
    {
        icon: CheckCircle2,
        title: "Build Lasting Habits",
        description: "Track daily habits, maintain streaks, and visualize your progress with beautiful heatmaps.",
        color: "text-green-500",
    },
    {
        icon: Trophy,
        title: "Gamified Progress",
        description: "Unlock badges, hit milestones, and stay motivated with a rewarding achievement system.",
        color: "text-yellow-500",
    },
    {
        icon: BarChart3,
        title: "Insights That Matter",
        description: "Beautiful charts showing your productivity patterns, focus time, and habit consistency.",
        color: "text-purple-500",
    },
    {
        icon: Smartphone,
        title: "Works Everywhere",
        description: "Seamless experience across iPhone, iPad, Mac, and Android devices with real-time sync.",
        color: "text-indigo-500",
    },
    {
        icon: Lock,
        title: "Your Data, Your Control",
        description: "Privacy-first design with local storage options and secure cloud synchronization.",
        color: "text-slate-500",
    },
]

export function Features() {
    return (
        <section className="py-24 bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Everything you need to <span className="text-primary">excel</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        FocusLog combines the best productivity tools into one seamless experience.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <feature.icon className={`h-10 w-10 mb-4 ${feature.color}`} />
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
