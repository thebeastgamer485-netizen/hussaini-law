import { defineField, defineType } from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3, validation: (r) => r.required() }),
  ],
  preview: { select: { title: 'title' } },
})
