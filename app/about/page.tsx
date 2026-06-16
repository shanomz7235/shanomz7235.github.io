import TypeWriter from '@/components/TypeWriter'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Section header */}
      <div className="mb-10">
        <p className="px-label mb-3">PLAYER PROFILE</p>
        <h1 className="px-title" style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>
          ABOUT ME
        </h1>
        <div className="px-divider" style={{ maxWidth: 300 }} />
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left — photo + stat card */}
        <div className="flex-shrink-0 space-y-4">
          <img
            src="/images/me.jpg"
            alt="Shanom"
            className="px-avatar"
            style={{ width: 260, height: 260, objectFit: 'cover', display: 'block' }}
          />

          <div className="px-card space-y-2" style={{ minWidth: 260 }}>
            <p className="px-label mb-3">CHARACTER INFO</p>
            <Row label="NAME" value="Pitchayakorn Saigate" />
            <Row label="ALIAS" value="Shanom" />
            <Row label="DOB" value="29 OCT 2002" />
            <Row label="CLASS" value="Backend Dev" />
            <Row label="LOCATION" value="Sai Mai, Bangkok" />
            <Row label="LANG" value="Thai / EN (Mid)" />
            <Row label="MILITARY" value="Exempted" />
          </div>
        </div>

        {/* Right — bio */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="font-pixel mb-2" style={{ fontSize: '9px', color: '#8888aa' }}>
              HI, IT&apos;S
            </p>
            <h2 className="font-pixel px-title" style={{ fontSize: 'clamp(18px, 3vw, 28px)' }}>
              SHANOM
            </h2>
            <p className="font-pixel mt-1" style={{ fontSize: '11px', color: '#00cfff' }}>
              PITCHAYAKORN SAIGATE / พิชญากร สัยเกตุ
            </p>
          </div>

          <div className="font-pixel" style={{ fontSize: '11px', color: '#8888aa' }}>
            &gt; <TypeWriter />
          </div>

          <div className="space-y-3" style={{ fontSize: '20px', color: '#c0c0d0', lineHeight: 1.7 }}>
            <p>
              Computer Engineering graduate with hands-on experience in backend development
              using Go (Golang). Skilled in designing and building RESTful APIs and working
              with relational databases.
            </p>
            <p>
              Experienced in contributing to enterprise-scale systems and continuously applying
              problem-solving skills to real-world challenges. Eager to expand skills in DevOps
              practices, containerization, and modern deployment workflows.
            </p>
            <p>
              I enjoy playing volleyball as a hobby and have skills in composing and singing,
              reflecting my interest in music and creative pursuits.
            </p>
          </div>

          {/* Interests tags */}
          <div>
            <p className="px-label mb-3">INTERESTS</p>
            <div className="flex flex-wrap gap-2">
              {['VOLLEYBALL', 'MUSIC', 'CODING', 'DEVOPS', 'ALGORITHMS'].map(tag => (
                <span key={tag} className="px-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* YouTube */}
          <div>
            <p className="px-label mb-3">FEATURED TRACK</p>
            <div style={{ border: '3px solid #ff2a6d', boxShadow: '4px 4px 0 0 #ff2a6d' }}>
              <iframe
                width="100%"
                height="280"
                src="https://www.youtube.com/embed/mtuG5OjGzKA"
                title="ShanomZ - It's all a lie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="px-label mb-3">FIND ME AT</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/pitchayakorns" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="https://github.com/shanomz7235" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">GH</a>
              <a href="https://www.instagram.com/shanomz/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 items-start" style={{ fontSize: '16px' }}>
      <span className="font-pixel" style={{ fontSize: '7px', color: '#8888aa', minWidth: 60, paddingTop: 3 }}>
        {label}
      </span>
      <span style={{ color: '#e0e0e0' }}>{value}</span>
    </div>
  )
}
