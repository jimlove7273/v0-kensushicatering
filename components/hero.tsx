import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-chef-hands.jpg"
          alt="Chef preparing sushi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
          Premium Private Chef
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-8 text-balance">
          Bring the flavors of Japan home.
        </h1>
        <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Experience authentic, handcrafted sushi and restaurant-quality Japanese 
          cuisine with our luxury private catering service.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-sm tracking-wider"
        >
          <Link href="/book">Reserve Your Date</Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary animate-pulse" />
      </div>
    </section>
  )
}
