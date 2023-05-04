export default {
  name: 'main-menu',
  type: 'document',
  title: 'Main menu',
  fields: [
    {
      name: 'index',
      type: 'number',
      title: 'Index',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url',
    },
    {
      name: 'sub',
      type: 'array',
      title: 'Sub menu',
      of: [{type: 'main-menu'}],
    },
  ],
}
