"use client"

import Link from "next/link"
import { Instagram, Linkedin, Globe, Code2 } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Galería", href: "#galeria" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/ludmiavila.g", label: "Instagram" }
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="#inicio" className="font-serif text-2xl tracking-tight">
              <span className="font-light">Ludmila Avila Gioia</span>
            </Link>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Fotografía y creativa visual. Potenciando la esencia de marcas a través de una mirada estratégica y estética.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-background/30 text-background/70 hover:text-background hover:border-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest text-background/50 uppercase">
            © {new Date().getFullYear()} Ludmila Avila G.
          </p>
          
          {/* Tu Firma de Desarrollador */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-xs tracking-widest text-background/30 uppercase flex items-center gap-2">
              <Code2 size={14} /> Desarrollado por Tomas Aguilar
            </span>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/tomas-aguilar-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/50 hover:text-background transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/dev.aguilar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/50 hover:text-background transition-colors"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://tomas-aguilar-portolio.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/50 hover:text-background transition-colors"
                title="Portfolio"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}