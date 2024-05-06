import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blockCategory',
  title: 'Category Block',
  type: 'object',
  fields: [
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'customImage',
    }),
    defineField({
      name: 'titleThin',
      title: 'Title Thin',
      type: 'string',
    }),
    defineField({
      name: 'titleBold',
      title: 'Title Bold',
      type: 'string',
    }),
    defineField({
      name: 'imageOne',
      title: 'Image One',
      type: 'customImage',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageTwo',
      title: 'Image Two',
      type: 'customImage',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'string',
    }),
    defineField({
      name: 'hardware',
      title: 'Hardware',
      type: 'string',
    }),
    defineField({
      name: 'software',
      title: 'Software',
      type: 'string',
    }),
    defineField({
      name: 'maximumSize',
      title: 'Maximum Size',
      type: 'string',
    }),
    defineField({
      name: 'characteristics',
      title: 'Characteristics',
      type: 'string',
    }),
    defineField({
      name: 'moreInfo',
      title: 'More Info',
      type: 'blockContent',
      description: 'More information about this category',
    }),
  ],
})
