export default {
  name: 'texts',
  type: 'document',
  title: 'Texts',
  fields: [
    {
      name: 'key',
      type: 'string',
      title: 'Key',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'en',
      type: 'string',
      title: 'English',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'nl',
      type: 'string',
      title: 'Dutch',
    },
    {
      name: 'fr',
      type: 'string',
      title: 'French',
    },
  ],
}
