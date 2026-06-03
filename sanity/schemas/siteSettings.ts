import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'mobile', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'address', type: 'text', rows: 2 }),
    defineField({ name: 'hoursWeekday', title: 'Hours (Mon–Fri)', type: 'string' }),
    defineField({ name: 'hoursSaturday', title: 'Hours (Sat)', type: 'string' }),
    defineField({
      name: 'social',
      title: 'Social',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url' },
        { name: 'instagram', type: 'url' },
        { name: 'linkedin', type: 'url' },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
