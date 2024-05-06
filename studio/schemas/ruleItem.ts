import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ruleItem',
  title: 'RuleItem',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})
