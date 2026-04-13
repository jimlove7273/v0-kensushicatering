import Image from "next/image"

export default function Gallery() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/crispy-rice.png"
          alt="Crispy rice sushi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight text-balance">
          Crafted with precision.
        </h2>
      </div>
    </section>
  )
}
