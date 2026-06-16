import Link from 'next/link'
import TypeWriter from '@/components/TypeWriter'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="font-pixel mb-8" style={{ fontSize: '8px', color: '#9988bb' }}>
        <span style={{ color: '#bf00ff' }}>▶</span> PORTFOLIO.EXE{' '}
        <span className="animate-blink">|</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/images/me.jpg"
              alt="Shanom"
              className="px-avatar"
              style={{ width: 240, height: 240, objectFit: 'cover', display: 'block' }}
            />
            <div
              className="font-pixel"
              style={{
                position: 'absolute',
                bottom: -10,
                right: -10,
                fontSize: '7px',
                background: '#bf00ff',
                color: '#050308',
                padding: '4px 8px',
              }}
            >
              PLAYER 1
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-5">
          <div>
            <p className="font-pixel mb-2" style={{ fontSize: '9px', color: '#9988bb' }}>
              HI, IT&apos;S
            </p>
            <h1 className="font-pixel px-title" style={{ fontSize: 'clamp(20px, 4vw, 36px)', lineHeight: 1.4 }}>
              SHANOM
            </h1>
            <h2 className="font-pixel mt-1" style={{ fontSize: 'clamp(10px, 2vw, 14px)', color: '#00cfff' }}>
              PITCHAYAKORN SAIGATE
            </h2>
          </div>

          <div className="font-pixel" style={{ fontSize: '12px', color: '#9988bb' }}>
            &gt; <TypeWriter />
          </div>

          <p style={{ fontSize: '20px', color: '#c0c0d0', maxWidth: 520, lineHeight: 1.6 }}>
            Computer Engineering graduate with hands-on experience in backend development
            using Go (Golang). Skilled in RESTful APIs, relational databases, and enterprise
            systems. Eager to expand into DevOps and modern deployment workflows.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="https://www.linkedin.com/in/pitchayakorns" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
            <a href="https://github.com/shanomz7235" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">GH</a>
            <a href="https://www.instagram.com/shanomz/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">IG</a>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-btn">
              [ VIEW RESUME ]
            </a>
            <Link href="/contact" className="px-btn px-btn-cyan">
              [ CONTACT ME ]
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'LANGUAGES', value: '6', color: '#bf00ff' },
          { label: 'TOOLS', value: '9+', color: '#00cfff' },
          { label: 'EVENTS', value: '3', color: '#ff2a6d' },
          { label: 'EXP', value: '2', color: '#ffd700' },
        ].map(s => (
          <div key={s.label} className="px-card text-center">
            <p className="font-pixel" style={{ fontSize: '24px', color: s.color }}>{s.value}</p>
            <p className="px-label mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
