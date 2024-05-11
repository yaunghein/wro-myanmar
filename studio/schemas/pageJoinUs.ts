import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'joinUsPage',
  title: 'Join Us Page',
  type: 'document',
  fields: [
    defineField({
      title: 'Is Active?',
      name: 'isActive',
      type: 'boolean',
    }),
    defineField({
      title: 'Register Title',
      name: 'registerTitle',
      type: 'string',
    }),
    defineField({
      title: 'Register Description',
      name: 'registerDescription',
      type: 'blockContent',
    }),
    defineField({
      title: 'Register Button Label',
      name: 'registerBtn',
      type: 'string',
    }),
    defineField({
      title: 'Register Image',
      name: 'registerImage',
      type: 'image',
    }),
    defineField({
      title: 'Partner Title',
      name: 'partnerTitle',
      type: 'string',
    }),
    defineField({
      title: 'Partner Description',
      name: 'partnerDescription',
      type: 'blockContent',
    }),
    defineField({
      title: 'Partner Button Label',
      name: 'partnerBtn',
      type: 'string',
    }),
    defineField({
      title: 'Partner Image',
      name: 'partnerImage',
      type: 'image',
    }),
    defineField({
      title: 'Sponsor Title',
      name: 'sponsorTitle',
      type: 'string',
    }),
    defineField({
      title: 'Sponsor Description',
      name: 'sponsorDescription',
      type: 'blockContent',
    }),
    defineField({
      title: 'Sponsor Button Label',
      name: 'sponsorBtn',
      type: 'string',
    }),
    defineField({
      title: 'Sponsor Image',
      name: 'sponsorImage',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'registerTitle',
      isActive: 'isActive',
    },
    prepare(selection) {
      const subtitle = selection.isActive ? 'active' : 'not active'
      return {...selection, subtitle}
    },
  },
})
