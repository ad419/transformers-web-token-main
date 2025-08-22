import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
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
      name: 'hero-bg-image',
      label: 'Hero Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'hero-crypto-coin-image',
      label: 'Crypto Coin Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
  ],
}
