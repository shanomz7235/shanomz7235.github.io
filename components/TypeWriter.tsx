'use client'

import { useEffect, useState } from 'react'

const WORDS = ['Backend Developer', 'DevOps Engineer', 'Software Developer', 'Problem Solver']

export default function TypeWriter() {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIdx % WORDS.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
      } else {
        setDeleting(false)
        setWordIdx(i => i + 1)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx])

  return (
    <span style={{ color: '#00cfff' }}>
      {displayed}
      <span className="animate-blink" style={{ color: '#bf00ff' }}>_</span>
    </span>
  )
}
