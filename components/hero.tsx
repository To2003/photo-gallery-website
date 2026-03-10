import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-1 opacity-30">
        <div className="bg-muted aspect-[3/4]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=600')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="bg-muted aspect-[3/4]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="bg-muted aspect-[3/4] hidden md:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="bg-muted aspect-[3/4]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="bg-muted aspect-[3/4]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="bg-muted aspect-[3/4] hidden md:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600')", backgroundSize: "cover", backgroundPosition: "center" }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Fotografía Profesional
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-6 text-balance">
          Capturando momentos que perduran
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Transformo tus momentos especiales en recuerdos eternos. Bodas, retratos, eventos y más.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#galeria"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Ver Portfolio
          </Link>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>

      <Link
        href="#galeria"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to gallery"
      >
        <ArrowDown size={24} />
      </Link>
    </section>
  )
}
