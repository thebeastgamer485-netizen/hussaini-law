import { defineField, defineType } from 'sanity'

export const subService = defineType({
  name: 'subService',
  title: 'Sub-Service',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon (Material Symbols name)',
      type: 'string',
      description: 'e.g. "gavel", "family_restroom" — see fonts.google.com/icons',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({
      name: 'large',
      title: 'Feature as large card',
      type: 'boolean',
      description: 'Highlights this service as the lead card on the grid.',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', icon: 'icon' },
    prepare: ({ title, icon }) => ({ title, subtitle: icon }),
  },
})
