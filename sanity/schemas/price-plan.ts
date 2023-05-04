export default {
  name: 'price-plan',
  type: 'document',
  title: 'Pricing Plans',
  fields: [
    {
      name: 'index',
      type: 'number',
      title: 'Index',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'topHint',
      type: 'string',
      title: 'TopHint',
    },
    {
      name: 'monthlyPrice',
      type: 'number',
      title: 'Price (monthly)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'monthlyPriceComment',
      type: 'string',
      title: 'Price comment (monthly)',
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
    },
    {
      name: 'benefits',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Benefits',
    },
  ],
}
