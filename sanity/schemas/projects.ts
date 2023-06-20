import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    
    defineField({
    name: 'image',
    title: 'Project Image',
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
      name: 'summery',
      title: 'Project Summery',
      type: 'text',
    }),
    
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'link to build',
      type: 'url',
    }),
    
  ],
  
})
