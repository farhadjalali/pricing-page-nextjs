export default {
  name: 'page-meta',
  type: 'document',
  title: 'Pages meta',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'locale',
      type: 'string',
      title: 'Locale',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          {title: 'English (US)', value: 'en-US'},
          {title: 'Dutch (Netherlands)', value: 'nl-NL'},
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'keywords',
      type: 'string',
      title: 'Keywords',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
