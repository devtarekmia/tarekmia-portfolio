import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
    name: 'heroImage',
    title: 'Main image',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'BackgroundInformation',
      title: 'Background Information',
      type: 'string',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Social Media',
      type: 'array',
      of: [{type: 'reference', to: {type: 'socials'}}],
    }),
    
  ],
  
})
