import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReserveSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight text-balance">
          Reserve Your Date.
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto leading-relaxed mb-10 text-pretty">
          Transform your next event with an unforgettable dining experience. 
          Dates book quickly, especially for weekends and holidays.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-6 text-sm tracking-wider"
        >
          <Link href="/book">Book Your Event</Link>
        </Button>
      </div>
    </section>
  )
}
