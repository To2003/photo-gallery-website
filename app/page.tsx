import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
