import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { getPhotos} from "@/sanity/lib/getPhotos"
import { getProfile } from "@/sanity/lib/getProfile"

export default async function Home() {
  // Ejecutamos ambas peticiones en paralelo para mayor velocidad
  const [photos, profile] = await Promise.all([
    getPhotos(),
    getProfile()
  ]);

  return (
    <main className="scroll-smooth">
      <Header />
      <Hero />
      <Gallery initialPhotos={photos} />
      <Services />
      <About data={profile} />
      <Contact data={profile} />
      <Footer />
    </main>
  )
}