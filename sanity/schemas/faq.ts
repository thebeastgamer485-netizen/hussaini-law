import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
      description: 'Optional grouping label (e.g. "Immigration").',
    }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'topic' },
  },
})
