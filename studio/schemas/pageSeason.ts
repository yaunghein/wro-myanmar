import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seasonPage',
  title: 'Season Page',
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
      name: 'heroTitleNormal',
      title: 'Hero Title Normal',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleGradient',
      title: 'Hero Title Gradient',
      type: 'string',
    }),
    defineField({
      name: 'heroSubTitle',
      title: 'Hero Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubDescription',
      title: 'Hero Sub Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'customImage',
    }),
    defineField({
      name: 'timelineLabel',
      title: 'Timeline Label',
      type: 'string',
    }),
    defineField({
      name: 'calendarLabel',
      title: 'Calendar Label',
      type: 'string',
    }),
    defineField({
      name: 'rulesLabel',
      title: 'Rules Label',
      type: 'string',
    }),
    defineField({
      name: 'registrationLabel',
      title: 'Registration Label',
      type: 'string',
    }),
    defineField({
      name: 'seasonTitleOne',
      title: 'Season Title One',
      type: 'string',
    }),
    defineField({
      name: 'seasonTitleTwo',
      title: 'Season Title Two',
      type: 'string',
    }),
    defineField({
      name: 'seasonDescription',
      title: 'Season Description',
      type: 'text',
    }),
    defineField({
      name: 'seasonBtnLabel',
      title: 'Season Button Label',
      type: 'string',
    }),
    defineField({
      name: 'eventTimeline',
      title: 'Event Timeline',
      type: 'array',
      of: [{type: 'event'}],
    }),
    defineField({
      name: 'calendarTitle',
      title: 'Calendar Title',
      type: 'string',
    }),
    defineField({
      name: 'calendarDescription',
      title: 'Calendar Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'eventCalendar',
      title: 'Event Calendar',
      type: 'array',
      of: [{type: 'event'}],
    }),
    defineField({
      name: 'ruleTitle',
      title: 'Rule Title',
      type: 'string',
    }),
    defineField({
      name: 'ruleDescription',
      title: 'Rule Description',
      type: 'text',
    }),
    defineField({
      name: 'roboRules',
      title: 'Robo Rules',
      type: 'ruleRobo',
    }),
    defineField({
      name: 'innovatorRules',
      title: 'Innovator Rules',
      type: 'ruleInnovator',
    }),
    defineField({
      name: 'registerTitle',
      title: 'Register Title',
      type: 'string',
    }),
    defineField({
      name: 'registerDescription',
      title: 'Register Description',
      type: 'text',
    }),
    defineField({
      name: 'registerBtnLabel',
      title: 'Register Button Label',
      type: 'string',
    }),
    defineField({
      name: 'registerImage',
      title: 'Register Image',
      type: 'customImage',
    }),
  ],
  preview: {
    select: {
      titleNormal: 'heroTitleNormal',
      titleGradient: 'heroTitleGradient',
      isActive: 'isActive',
      media: 'metaData.ogImage',
    },
    prepare(selection) {
      const title = `${selection.titleNormal} ${selection.titleGradient}`
      const subtitle = selection.isActive ? 'active' : 'not active'
      return {...selection, title, subtitle}
    },
  },
})
