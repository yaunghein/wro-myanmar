import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ruleGroup',
  title: 'Rule Group',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'rules',
      title: 'Rules',
      type: 'array',
      of: [{type: 'ruleItem'}],
    }),
  ],
})
