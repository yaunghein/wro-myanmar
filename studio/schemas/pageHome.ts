import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubTitle',
      title: 'Hero Sub Title',
      type: 'blockContent',
    }),
    defineField({
      name: 'highlightTeamLabel',
      title: 'Highlight Team Label',
      type: 'string',
    }),
    defineField({
      name: 'highlightTeamNumber',
      title: 'Highlight Team Number',
      type: 'string',
    }),
    defineField({
      name: 'highlightCountryLabel',
      title: 'Highlight Country Label',
      type: 'string',
    }),
    defineField({
      name: 'highlightCountryNumber',
      title: 'Highlight Country Number',
      type: 'string',
    }),
    defineField({
      name: 'heroBtnLabel',
      title: 'Hero Button Label',
      type: 'string',
    }),
    defineField({
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      of: [{type: 'customImage'}],
    }),
    defineField({
      name: 'categoryTitleOne',
      title: 'Category Title One',
      type: 'string',
    }),
    defineField({
      name: 'categoryTitleTwo',
      title: 'Category Title Two',
      type: 'string',
    }),
    defineField({
      name: 'categoryDescription',
      title: 'Category Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'categoryBtnOneLabel',
      title: 'Category Button One Label',
      type: 'string',
    }),
    defineField({
      name: 'categoryBtnTwoLabel',
      title: 'Category Button Two Label',
      type: 'string',
    }),
    defineField({
      name: 'robo',
      title: 'Robo Mission',
      type: 'blockCategory',
    }),
    defineField({
      name: 'roboRules',
      title: 'Robo Rules',
      type: 'ruleRobo',
    }),
    defineField({
      name: 'innovator',
      title: 'Future Innovators',
      type: 'blockCategory',
    }),
    defineField({
      name: 'innovatorRules',
      title: 'Innovator Rules',
      type: 'ruleInnovator',
    }),
    defineField({
      name: 'partnerTitle',
      title: 'Partner Title',
      type: 'string',
    }),
    defineField({
      name: 'partnerDescription',
      title: 'Partner Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'partnerBtnLabel',
      title: 'Partner Button Label',
      type: 'string',
    }),
    defineField({
      name: 'partnerImage',
      title: 'Partner Image',
      type: 'customImage',
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      isActive: 'isActive',
      media: 'metaData.ogImage',
    },
    prepare(selection) {
      const subtitle = selection.isActive ? 'active' : 'not active'
      return {...selection, subtitle}
    },
  },
})
