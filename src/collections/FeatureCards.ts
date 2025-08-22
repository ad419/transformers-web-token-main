import type { CollectionConfig } from 'payload'

export const FeatureCards: CollectionConfig = {
  slug: 'feature-cards',
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
      name: 'feature-image',
      label: 'Feature Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'button-text',
      label: 'Button Text',
      type: 'text',
    },
  ],
}
