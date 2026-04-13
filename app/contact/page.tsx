"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            Contact Us
          </h1>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Ready to bring the flavors of Japan to your next event? Reach out and 
            we&apos;ll craft the perfect experience for you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              <h2 className="font-sans text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Let&apos;s plan your event.
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-10 text-pretty">
                Whether it&apos;s an intimate dinner party or a large corporate gala, 
                Chef Ken and his team are ready to create an unforgettable culinary 
                experience tailored to your needs.
              </p>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="bg-card border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-primary font-sans text-sm tracking-wider uppercase mb-2">
                        Business Hours
                      </h3>
                      <p className="text-foreground font-sans text-lg font-medium">
                        11:00 am — 11:00 pm
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Monday — Sunday
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-primary font-sans text-sm tracking-wider uppercase mb-2">
                        Service Areas
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        Los Angeles, Santa Monica, Laguna Niguel, Newport Beach, 
                        Beverly Hills, and Malibu. If your event is within our reach, 
                        don&apos;t hesitate to reach out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card border border-border p-8 md:p-10">
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-foreground mb-2">
                Send a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-foreground/70 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-foreground/70 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-foreground/70 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground/70 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-background border-border rounded-none resize-none focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 text-sm tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
