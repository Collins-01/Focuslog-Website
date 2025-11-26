"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const screenshots = [
    {
        title: "Focus Timer",
        description: "Stay in the zone with customizable timers",
        color: "bg-blue-500/10",
    },
    {
        title: "Habit Tracker",
        description: "Build streaks and track your daily progress",
        color: "bg-green-500/10",
    },
    {
        title: "Achievements",
        description: "Earn badges and rewards for your hard work",
        color: "bg-yellow-500/10",
    },
    {
        title: "Analytics",
        description: "Visualize your productivity trends over time",
        color: "bg-purple-500/10",
    },
]

export function Screenshots() {
    return (
        <section className="py-24 bg-secondary/5 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Beautifully designed for <span className="text-primary">focus</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A clean, distraction-free interface that helps you get things done.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {screenshots.map((item, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                                            <CardContent className="flex aspect-[9/16] items-center justify-center p-0 relative">
                                                <div className={`absolute inset-0 ${item.color} flex items-center justify-center`}>
                                                    <span className="text-muted-foreground/50 font-medium">
                                                        {item.title} Screenshot
                                                    </span>
                                                </div>
                                            </CardContent>
                                            <div className="p-4 text-center border-t">
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-xs text-muted-foreground">{item.description}</p>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
