"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { urlFor } from "@/sanity/lib/image" // Importante para las imágenes

export function Gallery({ initialPhotos }: { initialPhotos: any[] }) {
  const [activeCategory, setActiveCategory] = useState("Todas")
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null)

  // 1. Generamos las categorías dinámicamente según lo que subió el cliente
  const dynamicCategories = [
    "Todas", 
    ...Array.from(new Set(initialPhotos.map((p) => p.categoria)))
  ].filter(Boolean);

  // 2. Filtramos usando la data de Sanity
  const filteredPhotos = activeCategory === "Todas"
    ? initialPhotos
    : initialPhotos.filter((photo) => photo.categoria === activeCategory)

  return (
    <section id="galeria" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* ... (Cabecera igual) ... */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dynamicCategories.map((category) => (
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
              key={photo._id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-[3/4] overflow-hidden bg-muted"
            >
              <Image
                // Usamos urlFor para que la imagen no pese una locura
                src={urlFor(photo.imagen).width(800).url()}
                alt={photo.titulo || "Foto de galería"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity text-left">
                <p className="text-background text-sm">{photo.categoria}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button className="absolute top-6 right-6 text-background hover:text-background/70">
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              // Para el modal pedimos una imagen más grande
              src={urlFor(selectedPhoto.imagen).width(1600).url()}
              alt={selectedPhoto.titulo || "Imagen ampliada"}
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