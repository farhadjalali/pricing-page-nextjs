export default {
  name: 'plan-feature',
  type: 'object',
  title: 'Plan features',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'comment',
      type: 'string',
      title: 'Comment',
    },
    {
      name: 'compare',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Compare',
    },
  ],
}
