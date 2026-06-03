import { defineField, defineType } from 'sanity'

export const practiceArea = defineType({
  name: 'practiceArea',
  title: 'Practice Area',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'services', title: 'Services' },
    { name: 'process', title: 'Process' },
    { name: 'faq', title: 'FAQs' },
    { name: 'cta', title: 'CTA' },
  ],
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'seo',
      options: { source: 'title', maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 2, group: 'seo' }),

    defineField({ name: 'eyebrow', type: 'string', group: 'hero' }),
    defineField({ name: 'title', type: 'string', group: 'hero', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3, group: 'hero' }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    defineField({ name: 'servicesEyebrow', type: 'string', group: 'services' }),
    defineField({ name: 'servicesTitle', type: 'string', group: 'services' }),
    defineField({ name: 'servicesIntro', type: 'text', rows: 3, group: 'services' }),
    defineField({
      name: 'services',
      title: 'Sub-services',
      type: 'array',
      of: [{ type: 'subService' }],
      group: 'services',
    }),

    defineField({
      name: 'process',
      type: 'object',
      group: 'process',
      fields: [
        { name: 'eyebrow', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'intro', type: 'text', rows: 2 },
        { name: 'steps', type: 'array', of: [{ type: 'processStep' }] },
      ],
    }),

    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'faq',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),

    defineField({
      name: 'cta',
      type: 'object',
      group: 'cta',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text', rows: 3 },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
