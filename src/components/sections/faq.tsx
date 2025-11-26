"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "When will FocusLog launch?",
        answer: "We are currently in private beta and plan to launch the public beta in Q4 2025. Join the waitlist to get early access!",
    },
    {
        question: "Which platforms are supported?",
        answer: "FocusLog will be available on iOS, macOS, and Android at launch. We're also planning a web version for the future.",
    },
    {
        question: "Is it free or paid?",
        answer: "FocusLog will have a generous free tier that includes all core features (timers, basic habits, stats). We'll also offer a Pro subscription for advanced analytics, unlimited habits, and cloud sync.",
    },
    {
        question: "How is my data stored?",
        answer: "We take privacy seriously. By default, your data is stored locally on your device. If you choose to enable cloud sync, your data is encrypted and stored securely.",
    },
    {
        question: "Can I use it offline?",
        answer: "Yes! FocusLog is designed to work completely offline. Your data will sync automatically when you're back online.",
    },
]

export function FAQ() {
    return (
        <section className="py-24 bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Everything you need to know about FocusLog.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
