import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Chef from "@/components/chef"
import Process from "@/components/process"
import Gallery from "@/components/gallery"
import ReserveSection from "@/components/reserve-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Chef />
      <Process />
      <Gallery />
      <ReserveSection />
      <Footer />
    </main>
  )
}
