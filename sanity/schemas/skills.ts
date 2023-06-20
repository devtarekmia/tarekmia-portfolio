import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of Skill',
      type: 'string',
    }),
    
    defineField({
    name: 'image',
    title: 'Skill Image',
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
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    }),
      
  ],
  
})
