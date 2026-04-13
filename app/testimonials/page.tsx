import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Ken's sushi catering was excellent. The display was beautiful and immaculate, the sushi so fresh and delicious and his customer service impeccable. We are so happy with Ken and look forward to hiring him for his services again. Flawless!",
    name: "Rose C.",
    location: "San Juan Capistrano, CA",
    event: "Birthday Party",
    guests: 40,
    date: "March 2024"
  },
  {
    quote: "Booking Ken's Sushi Catering for our wedding reception was the best decision we made. The sushi bar was a hit and the signature rolls were out of this world. The Wagyu Beef Roll and the Fireworks roll had our guests lining up for seconds. Truly a one-of-a-kind experience.",
    name: "David & Priya L.",
    location: "Beverly Hills, CA",
    event: "Wedding Reception",
    guests: 120,
    date: "January 2024"
  },
  {
    quote: "We hired Chef Ken for our annual company gala and the feedback from our team was overwhelmingly positive. His professionalism, attention to detail, and the quality of his ingredients are second to none. The sashimi platter alone was worth every penny. Highly recommend.",
    name: "Marcus T.",
    location: "Santa Monica, CA",
    event: "Corporate Gala",
    guests: 80,
    date: "November 2023"
  },
  {
    quote: "Chef Ken did an incredible omakase-style dinner for a small group at my home. He customized the menu perfectly around our preferences and brought an extraordinary level of skill and warmth to the evening. The salmon carpaccio and yellowtail jalapeño were absolutely divine.",
    name: "Jennifer K.",
    location: "Newport Beach, CA",
    event: "Intimate Dinner",
    guests: 12,
    date: "September 2023"
  },
  {
    quote: "We wanted something special for our 20th anniversary and Ken's team delivered beyond our wildest expectations. The entire experience — from the initial consultation to the last dish — was seamless and memorable. Our guests thought we had transported a top-tier sushi restaurant into our home.",
    name: "Robert & Ana C.",
    location: "Malibu, CA",
    event: "Anniversary Celebration",
    guests: 30,
    date: "August 2023"
  },
  {
    quote: "I cannot say enough great things about this catering service. Chef Ken was incredibly accommodating with dietary restrictions among our guests and still managed to create a menu that everyone absolutely loved. The crispy rice with spicy tuna was a showstopper. Will definitely book again!",
    name: "Angela W.",
    location: "Laguna Niguel, CA",
    event: "Baby Shower",
    guests: 25,
    date: "June 2023"
  }
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
            What Clients Say
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            Customer Reviews
          </h1>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Hear directly from the guests who have experienced Ken&apos;s exceptional 
            sushi catering service at their events.
          </p>
          
          {/* Rating Badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-card border border-border px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-serif text-lg">5.0</span>
            <span className="text-muted-foreground text-sm">— Average Rating</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border p-6 md:p-8 flex flex-col"
              >
                <Quote size={28} className="text-primary/30 mb-4" />
                <p className="text-foreground/80 font-sans text-base leading-relaxed mb-6 italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground font-sans font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground font-sans text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right font-sans text-sm">
                      <p className="text-primary font-medium">{testimonial.event}</p>
                      <p className="text-muted-foreground">{testimonial.guests} guests</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 leading-tight text-balance">
            Ready to create your own experience?
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto leading-relaxed mb-10 text-pretty">
            Join hundreds of satisfied clients across Southern California and let 
            Chef Ken bring the art of Japanese cuisine to your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-sm tracking-wider"
            >
              <Link href="tel:323-621-8185">Call to Book: 323-621-8185</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-none px-10 py-6 text-sm tracking-wider"
            >
              <Link href="/contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
