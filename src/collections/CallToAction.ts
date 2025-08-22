import type { CollectionConfig } from 'payload'

export const CallToAction: CollectionConfig = {
  slug: 'call-to-action',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Site Management',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'cta-bg-image',
      label: 'CTA Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'cta-icon',
      label: 'CTA Icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
    },
  ],
}
