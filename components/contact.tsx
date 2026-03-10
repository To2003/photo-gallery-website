"use client"
import { useState } from "react"
import { Instagram, Mail, Phone, MapPin, Send } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export function Contact({ data }: { data: any }) {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" })

  const instagramUser = data?.instagramUser || "usuario"
  const igLink = `https://instagram.com/${instagramUser.replace('@', '')}`

  return (
    <section id="contacto" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Trabajemos Juntos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario (se mantiene igual) */}
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground mb-6">Envíame un mensaje</h3>
            <form className="space-y-6">
              {/* ... inputs del form ... */}
              <button type="submit" className="w-full px-8 py-4 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
                <Send size={16} /> Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-12">
            {/* Info de contacto fija o podrías subirla a Sanity también */}
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Sígueme en Instagram</h3>
              <a href={igLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors mb-6">
                <Instagram size={24} />
                <span className="text-lg">@{instagramUser}</span>
              </a>
              
              <div className="grid grid-cols-3 gap-2">
                {data?.imagenesContacto?.map((img: any, index: number) => (
                  <a key={index} href={igLink} target="_blank" rel="noopener noreferrer" className="relative aspect-square bg-muted overflow-hidden group">
                    <Image
                      src={urlFor(img).width(400).url()}
                      alt={`Instagram ${index}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                      <Instagram className="text-background opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}