import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Screenshots } from "@/components/sections/screenshots"
import { WaitlistForm } from "@/components/sections/waitlist-form"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </main>
  )
}
