// sanity/schemaTypes/categoria.ts
export const categoria = {
  name: 'categoria',
  title: 'Categorías',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre de la Categoría',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (ID para la web)',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}