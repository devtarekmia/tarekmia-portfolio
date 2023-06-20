/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! // "9ieam6el"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION! // "2023-06-18"

export default defineConfig({
  basePath: '/studio',
  name: 'TarekMia_Studio',
  title: 'TarekMia Portfolio Content Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
