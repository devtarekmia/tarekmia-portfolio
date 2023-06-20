'use client'

import config from '../../../sanity.config'
import { NextStudioLoading } from 'next-sanity/studio/loading'

export default function StudioPage() {
  return <NextStudioLoading config={config} />
}