// sanity/schemaTypes/foto.ts
export const foto = {
  name: 'foto',
  title: 'Galería de Fotos',
  type: 'document',
  fields: [
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'reference', 
      to: [{ type: 'categoria' }],
    },
  ],
}