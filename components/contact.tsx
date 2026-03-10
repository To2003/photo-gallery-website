"use client"

import { useState } from "react"
import { Instagram, Mail, Phone, MapPin, Send } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/tuusuario", handle: "@tuusuario" },
]

const instagramFeed = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

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
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">Servicio de interés</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-foreground transition-colors"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="bodas">Bodas</option>
                  <option value="retratos">Retratos</option>
                  <option value="eventos">Eventos</option>
                  <option value="producto">Fotografía de Producto</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Mensaje</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <a href="mailto:hola@estudiofoto.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={20} />
                  <span>hola@estudiofoto.com</span>
                </a>
                <a href="tel:+34600000000" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={20} />
                  <span>+34 600 000 000</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin size={20} />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-light text-foreground mb-6">Sígueme en Instagram</h3>
              <a
                href="https://instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors mb-6"
              >
                <Instagram size={24} />
                <span className="text-lg">@tuusuario</span>
              </a>
              <div className="grid grid-cols-3 gap-2">
                {instagramFeed.map((src, index) => (
                  <a
                    key={index}
                    href="https://instagram.com/tuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square bg-muted overflow-hidden group"
                  >
                    <Image
                      src={src}
                      alt={`Instagram post ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 33vw, 150px"
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
