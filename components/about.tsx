import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

export function About({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="sobre-mi" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted">
            {data.fotoSobreMi && (
              <Image
                src={urlFor(data.fotoSobreMi).width(800).url()}
                alt="Fotógrafo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Sobre Mí</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              La persona detrás de la cámara
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed whitespace-pre-line">
              {data.biografia || "Cargando biografía..."}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
              {data.stats?.map((stat: any, i: number) => (
                <div key={i}>
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