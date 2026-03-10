"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const categories = ["Todas", "Bodas", "Retratos", "Naturaleza", "Eventos"]

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", category: "Bodas", alt: "Boda elegante" },
  { id: 2, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", category: "Retratos", alt: "Retrato mujer" },
  { id: 3, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", category: "Naturaleza", alt: "Montañas" },
  { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800", category: "Bodas", alt: "Ceremonia" },
  { id: 5, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", category: "Retratos", alt: "Retrato hombre" },
  { id: 6, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800", category: "Eventos", alt: "Evento nocturno" },
  { id: 7, src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800", category: "Bodas", alt: "Pareja" },
  { id: 8, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800", category: "Retratos", alt: "Retrato fashion" },
  { id: 9, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800", category: "Naturaleza", alt: "Bosque" },
  { id: 10, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", category: "Eventos", alt: "Conferencia" },
  { id: 11, src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800", category: "Bodas", alt: "Anillos" },
  { id: 12, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", category: "Retratos", alt: "Modelo" },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)

  const filteredPhotos = activeCategory === "Todas"
    ? photos
    : photos.filter((photo) => photo.category === activeCategory)

  return (
    <section id="galeria" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Galería de Trabajos
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide transition-colors ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-[3/4] overflow-hidden bg-muted"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-background text-sm">{photo.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/70 transition-colors"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
