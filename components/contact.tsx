"use client"
import { useState } from "react"
import { Instagram, Mail, Phone, MapPin, Send } from "lucide-react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export function Contact({ data }: { data: any }) {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Contacto</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">Trabajemos Juntos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FORMULARIO RECUPERADO */}
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground resize-none focus:outline-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-foreground text-background text-sm tracking-wide flex items-center justify-center gap-2">
                <Send size={16} /> Enviar Mensaje
              </button>
            </form>
          </div>

          {/* GRID DE IMÁGENES DE SANITY */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Información de contacto</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4"><Mail size={20} /><span>hola@estudiofoto.com</span></div>
                <div className="flex items-center gap-4"><Phone size={20} /><span>+34 600 000 000</span></div>
                <div className="flex items-center gap-4"><MapPin size={20} /><span>Madrid, España</span></div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Sígueme en Instagram</h3>
              <div className="grid grid-cols-3 gap-2">
                {data?.imagenesContacto?.map((img: any, index: number) => (
                  <div key={index} className="relative aspect-square bg-muted overflow-hidden group">
                    <Image
                      src={urlFor(img).width(400).url()}
                      alt={`Instagram ${index}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}