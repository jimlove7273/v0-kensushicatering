"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BookPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    guests: "",
    eventDate: "",
    eventType: "",
    budget: "",
    mealType: "",
    address: "",
    referral: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    alert("Thank you for your booking request! Chef Ken will reach out to you shortly.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            Reserve Your Date
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            Book Your Event
          </h1>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            Fill out the form below and Chef Ken will reach out to craft a custom 
            menu experience perfectly tailored to your event.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section 1: Contact Information */}
            <div className="bg-card border border-border p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-sans font-semibold text-lg">
                  1
                </span>
                <h2 className="font-sans text-xl md:text-2xl font-semibold text-foreground">
                  Your Contact Information
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-foreground/70 mb-2">
                    First Name <span className="text-primary">*</span>
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
                    Last Name <span className="text-primary">*</span>
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
                <div>
                  <label htmlFor="phone" className="block text-sm text-foreground/70 mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-foreground/70 mb-2">
                    Email Address <span className="text-primary">*</span>
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
              </div>
            </div>

            {/* Section 2: Event Details */}
            <div className="bg-card border border-border p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-sans font-semibold text-lg">
                  2
                </span>
                <h2 className="font-sans text-xl md:text-2xl font-semibold text-foreground">
                  Event Details
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm text-foreground/70 mb-2">
                    Number of Guests <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    min="1"
                    className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm text-foreground/70 mb-2">
                    Event Date <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="eventDate"
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm text-foreground/70 mb-2">
                    Type of Event <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="eventType"
                    type="text"
                    name="eventType"
                    placeholder="e.g., Birthday, Wedding, Corporate"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border rounded-none focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm text-foreground/70 mb-2">
                    Budget <span className="text-primary">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-background border border-border px-4 text-foreground rounded-none focus:border-primary focus:ring-primary focus:outline-none"
                  >
                    <option value="">Select a budget range</option>
                    <option value="35-55">$35 – $55 per person</option>
                    <option value="56-75">$56 – $75 per person</option>
                    <option value="76-100">$76 – $100 per person</option>
                    <option value="120+">Omakase $120 and up</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mealType" className="block text-sm text-foreground/70 mb-2">
                    Meal Type <span className="text-primary">*</span>
                  </label>
                  <select
                    id="mealType"
                    name="mealType"
                    value={formData.mealType}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-background border border-border px-4 text-foreground rounded-none focus:border-primary focus:ring-primary focus:outline-none"
                  >
                    <option value="">Select a meal type</option>
                    <option value="appetizers">Appetizers / Tapas / Cocktail</option>
                    <option value="buffet">Full Meal Buffet Station</option>
                    <option value="family-style">Family Style Sit Down (Assortment on Dining Table)</option>
                    <option value="omakase">Signature Sit Down Omakase Course</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm text-foreground/70 mb-2">
                    Event Address <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="bg-background border-border rounded-none resize-none focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Referral */}
            <div className="bg-card border border-border p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground font-sans font-semibold text-lg">
                  3
                </span>
                <h2 className="font-sans text-xl md:text-2xl font-semibold text-foreground">
                  How Did You Hear About Us?
                </h2>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Friends", "Instagram", "Facebook", "Yelp", "Google"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="referral"
                      value={option.toLowerCase()}
                      checked={formData.referral === option.toLowerCase()}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                    />
                    <span className="text-foreground/70 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-16 py-6 text-sm tracking-wider"
              >
                Submit Booking Request
              </Button>
              <p className="text-muted-foreground text-sm mt-6">
                By submitting this form you agree to be contacted by Chef Ken&apos;s 
                team regarding your event. For immediate assistance, call{" "}
                <a href="tel:323-621-8185" className="text-primary hover:underline">
                  323-621-8185
                </a>.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
