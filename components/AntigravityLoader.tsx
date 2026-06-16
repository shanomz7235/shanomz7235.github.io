'use client'

import dynamic from 'next/dynamic'

const AntigravityBg = dynamic(() => import('./AntigravityBg'), { ssr: false })

export default function AntigravityLoader() {
  return <AntigravityBg />
}
