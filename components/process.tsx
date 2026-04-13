export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Custom Menu",
      description:
        "Chef Ken reaches out to craft a customized menu perfectly tailored to your event's needs, preferences, and dietary requirements.",
    },
    {
      number: "02",
      title: "Fresh Sourcing",
      description:
        "Once finalized, our team visits the premier seafood markets the morning of your event to hand-select the finest, freshest ingredients.",
    },
    {
      number: "03",
      title: "The Event",
      description:
        "We arrive hours in advance to prepare the sushi bar. During the event, Chef Ken and team stand by to prepare custom dishes on request.",
    },
  ]

  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            The Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight text-balance">
            Seamless. Personal. Perfect.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border" />
              )}

              <div className="relative bg-card border border-border p-8 md:p-10">
                {/* Number */}
                <div className="text-primary font-serif text-4xl md:text-5xl font-light mb-6">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-foreground text-lg md:text-xl font-medium mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
