import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nueva Imagen de Fondo del Cliente */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/fondo.jpeg')", // Asegurate de que el nombre y extensión coincidan
          backgroundSize: "cover", 
          backgroundPosition: "center",
          opacity: 0.4 // Ajustá la opacidad para que el texto siga siendo legible
        }} 
      />

      {/* Degradado para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-1" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Estética & Perspectiva
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-6 text-balance leading-[1.1]">
          El arte de detener el tiempo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty font-light italic">
          Fotografía profesional con un enfoque estético, limpio y eterno.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#galeria"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase hover:bg-foreground/90 transition-all duration-300"
          >
            Explorar Obra
          </Link>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Consultar
          </Link>
        </div>
      </div>

      <Link
        href="#galeria"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce z-10"
        aria-label="Scroll to gallery"
      >
        <ArrowDown size={24} />
      </Link>
    </section>
  )
}