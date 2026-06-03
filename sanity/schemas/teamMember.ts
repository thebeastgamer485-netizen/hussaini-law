import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', title: 'Role / Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'isPrincipal',
      title: 'Principal solicitor?',
      type: 'boolean',
      description: 'Only one team member should be marked as principal.',
      initialValue: false,
    }),
    defineField({
      name: 'bio',
      title: 'Biography (paragraphs)',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'Each entry is a paragraph.',
    }),
    defineField({
      name: 'image',
      title: 'Portrait',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'credentials',
      title: 'Credential badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short labels shown as credential chips.',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'title', media: 'image' },
  },
})
