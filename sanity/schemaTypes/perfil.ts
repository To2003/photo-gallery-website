// sanity/schemaTypes/perfil.ts
export const perfil = {
  name: 'perfil',
  title: 'Perfil y Contacto',
  type: 'document',
  fields: [
    {
      name: 'fotoSobreMi',
      title: 'Foto Principal (Sobre Mí)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'biografia',
      title: 'Biografía / Descripción',
      type: 'text', // Para que pueda escribir varios párrafos
    },
    {
      name: 'imagenesContacto',
      title: 'Fotos de la sección Contacto (Grid)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.max(6), // Para que no rompa el diseño
    },
    {
      name: 'instagramUser',
      title: 'Usuario de Instagram',
      type: 'string',
    }
  ],
}