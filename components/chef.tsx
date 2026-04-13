import Image from "next/image"

export default function Chef() {
  return (
    <section id="chef" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
              Meet The Chef
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight text-balance">
              Over two decades of mastery.
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Chef Ken brings over 20 years of experience preparing Japanese cuisine 
                worldwide. At 21, he moved to Tokyo to pursue his passion, beginning 
                his journey at &quot;Kagetsu Arashi Ramen&quot; — one of Japan&apos;s largest ramen 
                chains with over 250 locations.
              </p>
              <p>
                Shifting his focus to the delicate art of sushi, he quickly rose to 
                the position of head chef and manager. In 2008, he opened his own 
                successful restaurant in West Covina.
              </p>
              <p>
                Today, Chef Ken focuses exclusively on private catering — bringing 
                the authentic, elevated experience of a Tokyo sushi bar directly 
                into people&apos;s homes.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 md:w-80 lg:w-96">
              <Image
                src="/images/chef-ken-real.png"
                alt="Chef Ken"
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
