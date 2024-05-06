import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsPage',
  title: 'News Page',
  type: 'document',
  fields: [
    defineField({
      title: 'Is Active?',
      name: 'isActive',
      type: 'boolean',
    }),
    defineField({
      name: 'metaData',
      title: 'Meta Data',
      type: 'metaData',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      media: 'metaData.ogImage',
    },
    prepare(selection) {
      const subtitle = selection.isActive ? 'active' : 'not active'
      return {...selection, subtitle}
    },
  },
})
