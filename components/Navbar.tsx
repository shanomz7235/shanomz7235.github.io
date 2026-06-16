'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/education', label: 'EDU' },
  { href: '/experience', label: 'EXP' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(15,15,35,0.95)',
        borderBottom: '3px solid #bf00ff',
        boxShadow: '0 2px 20px rgba(191,0,255,0.2)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-pixel text-px-green"
          style={{ fontSize: '11px', textShadow: '0 0 10px #bf00ff', textDecoration: 'none' }}
        >
          SHANOM<span className="animate-blink" style={{ color: '#00cfff' }}>.EXE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="font-pixel transition-all duration-100"
                style={{
                  fontSize: '8px',
                  padding: '6px 10px',
                  color: active ? '#050308' : '#8888aa',
                  background: active ? '#bf00ff' : 'transparent',
                  border: active ? '2px solid #bf00ff' : '2px solid transparent',
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}
                onMouseEnter={e => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = '#bf00ff'
                }}
                onMouseLeave={e => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = '#8888aa'
                }}
              >
                {active ? '▶ ' : ''}{label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-pixel"
          style={{ fontSize: '10px', color: '#bf00ff', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '≡'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden flex flex-col"
          style={{ background: '#050308', borderTop: '2px solid #bf00ff' }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-pixel"
                style={{
                  fontSize: '9px',
                  padding: '14px 20px',
                  color: active ? '#bf00ff' : '#8888aa',
                  borderBottom: '1px solid #2a1450',
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}
              >
                {active ? '▶ ' : '  '}{label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
