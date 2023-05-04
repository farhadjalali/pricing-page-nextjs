export default {
  name: 'compare-feature',
  type: 'document',
  title: 'Compare features',
  fields: [
    {
      name: 'index',
      type: 'number',
      title: 'Index',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'group',
      type: 'string',
      title: 'Group',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
      rows: 3,
    },
    {
      name: 'features',
      type: 'array',
      of: [{type: 'plan-feature'}],
      title: 'Features',
    },
    {
      name: 'desc',
      type: 'markdown',
      title: 'Desc',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
