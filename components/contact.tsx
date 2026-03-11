"use client"
import { Instagram, Phone, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export function Contact({ data }: { data: any }) {
  const whatsappNumber = "5491137984121"
  const instagramUser = "ludmiavila.g"

  return (
    <section id="contacto" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">¿Tenés un proyecto en mente?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* BLOQUE DE TEXTO E INVITACIÓN AL CONTACTO */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-light text-foreground mb-6">Hagamos que tu marca se note distinta.</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Estoy disponible para producciones de moda, beauty, diseño y gastronomía en Buenos Aires y alrededores. 
                Si buscás potenciar la identidad visual de tu marca con una mirada estratégica, hablemos.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-background border border-border hover:border-foreground transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                    <p className="text-lg">+54 9 11 3798-4121</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
              </a>

              <div className="flex items-center gap-4 p-6 border border-transparent">
                <MapPin size={24} className="text-muted-foreground" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Ubicación</p>
                  <p className="text-lg">Buenos Aires, Zona Norte</p>
                </div>
              </div>
            </div>
          </div>

          {/* GRID DE IMÁGENES DE SANITY + INSTAGRAM */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-light text-foreground">Instagram</h3>
              <a 
                href={`https://instagram.com/${instagramUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase hover:underline"
              >
                @{instagramUser}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {data?.imagenesContacto?.map((img: any, index: number) => (
                <div key={index} className="relative aspect-square bg-muted overflow-hidden group">
                  <Image
                    src={urlFor(img).width(400).url()}
                    alt={`Trabajo de Ludmila ${index}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground italic text-center lg:text-left">
              Seguime para ver el proceso detrás de cada producción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}