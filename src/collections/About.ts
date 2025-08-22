import type { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'about',
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
      name: 'about-icon',
      label: 'About Icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
  ],
}
