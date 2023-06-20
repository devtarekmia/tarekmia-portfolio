import { type SchemaTypeDefinition } from 'sanity'

import pageinfo from './schemas/pageinfo'
import experiences from './schemas/experiences'
import projects from './schemas/projects'
import skills from './schemas/skills'
import socials from './schemas/socials'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageinfo, experiences, projects, skills, socials],
}
