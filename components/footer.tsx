import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Galería", href: "#galeria" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/tuusuario", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/tuusuario", label: "Facebook" },
  { icon: Mail, href: "mailto:hola@estudiofoto.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="#inicio" className="font-serif text-2xl tracking-tight">
              Estudio<span className="font-light">Foto</span>
            </Link>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Fotografía profesional que captura la esencia de tus momentos más especiales.
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
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} EstudioFoto. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/50">
            Diseñado con pasión por la fotografía
          </p>
        </div>
      </div>
    </footer>
  )
}
