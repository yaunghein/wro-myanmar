import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ruleRobo',
  title: 'Rule Robo',
  type: 'object',
  fields: [
    defineField({
      name: 'generalRules',
      title: 'General Rules',
      type: 'ruleGroup',
    }),
    defineField({
      name: 'elementaryRules',
      title: 'Elementary Rules',
      type: 'ruleGroup',
    }),
    defineField({
      name: 'juniorRules',
      title: 'Junior Rules',
      type: 'ruleGroup',
    }),
    defineField({
      name: 'seniorRules',
      title: 'Senior Rules',
      type: 'ruleGroup',
    }),
  ],
})
