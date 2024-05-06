import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ruleInnovator',
  title: 'Rule Innovator',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'generalRules',
      title: 'General Rules',
      type: 'ruleItem',
    }),
    defineField({
      name: 'seasonChallenge',
      title: 'Season Challenge',
      type: 'ruleItem',
    }),
    defineField({
      name: 'teamInfo',
      title: 'Team Info',
      type: 'ruleItem',
    }),
  ],
})
