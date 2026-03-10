import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

const stats = [
  { number: "500+", label: "Sesiones" },
  { number: "8", label: "Años de experiencia" },
  { number: "200+", label: "Bodas" },
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
                alt="Fotógrafo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">Cargando imagen...</div>
            )}
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Sobre Mí</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              La persona detrás de la cámara
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Soy una fotógrafa apasionada con más de 8 años de experiencia capturando momentos únicos.
                Mi enfoque combina técnica profesional con un estilo artístico que hace que cada imagen cuente una historia.
              </p>
              <p>
                Creo que la mejor fotografía nace de la conexión genuina con las personas.
                Por eso me tomo el tiempo de conocer a mis clientes, entender su visión y crear un ambiente relajado donde la magia sucede naturalmente.
              </p>
              <p>
                Ya sea una boda íntima, un retrato corporativo o un evento especial, mi objetivo es siempre el mismo:
                crear imágenes que emocionen y perduren en el tiempo.
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