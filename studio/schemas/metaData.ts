import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'metaData',
  title: 'Meta Data',
  type: 'object',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'pageName',
      media: 'ogImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
