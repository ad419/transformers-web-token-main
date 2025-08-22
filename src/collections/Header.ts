import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header-content',
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
      name: 'icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'meme-name',
      label: 'Meme Name',
      type: 'text',
    },
  ],
}
