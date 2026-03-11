import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

const stats = [
  { number: "200+", label: "Sesiones" },
  { number: "8", label: "Años de experiencia" },
  { number: "200+", label: "Proyectos" }, // Cambié "Bodas" por "Proyectos" para que pegue más con su nuevo perfil
  { number: "100%", label: "Clientes felices" },
]

export function About({ data }: { data: any }) {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted">
            {data?.fotoSobreMi ? (
              <Image
                src={urlFor(data.fotoSobreMi).width(800).url()}
                alt="Ludmila Avila Gioia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Cargando imagen...
              </div>
            )}
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Sobre Mí</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              La visión detrás del lente
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Soy Ludmila, fotógrafa y creativa visual. Para mí, cada producto tiene un estilo propio y mi trabajo es hacerlo brillar. No me ato a un único estilo: me ajusto a la esencia de cada marca y la potencio con mi mirada estratégica.
              </p>
              <p>
                Mi experiencia comenzó en el sector gastronómico, pero mi verdadera pasión reside en el universo de la moda, el diseño y el beauty. Alterno entre producciones para clientes y proyectos personales, convencida de que la búsqueda estética constante es lo que marca la diferencia.
              </p>
              <p>
                Mi objetivo es crear imágenes de impacto inmediato, donde la fotografía no sea solo un recurso, sino una herramienta de posicionamiento. Combino técnica en Photoshop y Lightroom con dirección de arte para lograr resultados que, simplemente, se noten distintos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl md:text-4xl font-light text-foreground">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}