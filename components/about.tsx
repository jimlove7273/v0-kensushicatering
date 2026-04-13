import { MapPin, Star } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight text-balance">
              An unforgettable omakase experience.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Ken&apos;s Sushi Catering is one of the most highly rated private sushi 
                catering services in the southern California region. Our team of 
                professionals brings unforgettable dining experiences with the freshest 
                ingredients directly to the comfort of your home.
              </p>
              <p>
                Whether it&apos;s a large corporate gala, an intimate birthday party, or a 
                special event, Chef Ken curates a package tailored to your taste and 
                budget without ever compromising on quality.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-6">
            <div className="bg-card border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-primary text-sm tracking-wider uppercase mb-3">
                    Serving Areas
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Los Angeles, Santa Monica, Laguna Niguel, Newport Beach, Beverly Hills, Malibu
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-primary text-sm tracking-wider uppercase mb-3">
                    Highly Rated
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    5-star reviews across Yelp & social platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
