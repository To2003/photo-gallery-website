// sanity/schemaTypes/perfil.ts
export const perfil = {
  name: 'perfil',
  title: 'Fotos de Perfil y Contacto',
  type: 'document',
  fields: [
    {
      name: 'fotoSobreMi',
      title: 'Foto Principal (Sobre Mí)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imagenesContacto',
      title: 'Fotos para el grid de Contacto (Máximo 6)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}