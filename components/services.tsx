import { Camera, Heart, Users, Package } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Bodas",
    description: "Capturo cada momento mágico de tu día especial. Desde los preparativos hasta el último baile.",
    features: ["Cobertura completa", "Álbum digital", "Fotos editadas"],
  },
  {
    icon: Camera,
    title: "Retratos",
    description: "Sesiones personalizadas que capturan tu esencia. Perfecto para redes sociales o uso personal.",
    features: ["Sesión de 2 horas", "Múltiples looks", "10 fotos editadas"],
  },
  {
    icon: Users,
    title: "Eventos",
    description: "Documentación profesional de tus eventos corporativos, fiestas y celebraciones.",
    features: ["Cobertura flexible", "Entrega rápida", "Fotos sin marca"],
  },
  {
    icon: Package,
    title: "Producto",
    description: "Fotografía de producto para e-commerce, catálogos y redes sociales de tu marca.",
    features: ["Fondo limpio", "Múltiples ángulos", "Edición profesional"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Lo que ofrezco</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 group hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-10 h-10 text-foreground mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl font-light text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-foreground rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
