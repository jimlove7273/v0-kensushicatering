import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const menuCategories = [
  {
    title: "Signature Rolls",
    description: "Our chef's creative interpretations of classic sushi rolls",
    items: [
      { name: "Wagyu Beef Roll", description: "A5 wagyu, truffle aioli, crispy shallots, microgreens" },
      { name: "Fireworks Roll", description: "Spicy tuna, tempura crunch, jalapeño, dynamite sauce" },
      { name: "Golden Dragon", description: "Eel, avocado, cucumber topped with mango and gold flakes" },
      { name: "Sunset Roll", description: "Salmon, cream cheese, topped with seared albacore" },
    ]
  },
  {
    title: "Sashimi Selection",
    description: "Premium cuts of the freshest fish, hand-selected daily",
    items: [
      { name: "Bluefin Toro", description: "Fatty tuna belly, the pinnacle of sashimi" },
      { name: "Salmon Belly", description: "Rich, buttery salmon from cold Norwegian waters" },
      { name: "Yellowtail Jalapeño", description: "Hamachi with citrus ponzu and thin jalapeño slices" },
      { name: "Scallop Carpaccio", description: "Thinly sliced Hokkaido scallops with yuzu" },
    ]
  },
  {
    title: "Hot Appetizers",
    description: "Traditional Japanese starters to begin your meal",
    items: [
      { name: "Crispy Rice Spicy Tuna", description: "Seared rice cakes topped with spicy tuna tartare" },
      { name: "Salmon Carpaccio", description: "Seared salmon with garlic ponzu and fried capers" },
      { name: "Gyoza", description: "Pan-fried pork dumplings with house dipping sauce" },
      { name: "Tempura Assortment", description: "Light and crispy seasonal vegetables and shrimp" },
    ]
  },
  {
    title: "Omakase Experience",
    description: "Trust Chef Ken to curate a personalized tasting journey",
    items: [
      { name: "10-Course Omakase", description: "Chef's selection of seasonal highlights" },
      { name: "Premium Omakase", description: "Extended experience with rare and premium items" },
      { name: "Vegetarian Omakase", description: "Plant-based journey through Japanese flavors" },
      { name: "Couples Omakase", description: "Intimate experience designed for two" },
    ]
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
            Our Offerings
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            The Menu
          </h1>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Each dish is crafted with the freshest ingredients, sourced daily from 
            premier seafood markets. Our menu can be customized to your event&apos;s 
            needs and dietary requirements.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {menuCategories.map((category, index) => (
              <div key={index}>
                {/* Category Header */}
                <div className="text-center mb-10 md:mb-12">
                  <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground font-sans text-sm md:text-base">
                    {category.description}
                  </p>
                </div>

                {/* Menu Items */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="bg-card border border-border p-6 md:p-8"
                    >
                      <h3 className="text-foreground font-sans text-lg md:text-xl font-medium mb-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu Note */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary tracking-[0.2em] uppercase text-xs mb-4">
            Note
          </p>
          <p className="text-foreground/70 leading-relaxed mb-8 text-pretty">
            This is a sample of our offerings. Chef Ken creates custom menus 
            tailored to each event&apos;s unique requirements, preferences, and 
            dietary restrictions. Pricing varies based on guest count, menu 
            selection, and event complexity.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-sm tracking-wider"
          >
            <Link href="/book">Request a Custom Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
