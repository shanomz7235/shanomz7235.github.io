export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="px-label mb-3">SEND MESSAGE</p>
        <h1 className="px-title" style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>
          CONTACT ME
        </h1>
        <div className="px-divider" style={{ maxWidth: 300 }} />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/images/me2.jpg"
            alt="Shanom"
            className="px-avatar"
            style={{ width: 260, height: 300, objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Contact info */}
        <div className="flex-1 space-y-8">
          {/* Info card */}
          <div className="px-card space-y-5">
            <p className="px-label mb-2" style={{ color: '#bf00ff' }}>▌ GET IN TOUCH</p>

            <ContactRow
              label="EMAIL"
              value="pitchayakorn.sai@gmail.com"
              href="mailto:pitchayakorn.sai@gmail.com"
              color="#bf00ff"
            />
            <ContactRow
              label="TEL"
              value="095-423-5770"
              href="tel:0954235770"
              color="#00cfff"
            />
            <ContactRow label="LOCATION" value="Bangkok, Thailand" color="#ffd700" />
          </div>

          {/* Social links */}
          <div className="px-card-cyan">
            <p className="px-label mb-4" style={{ color: '#00cfff' }}>▌ SOCIAL LINKS</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/pitchayakorns"
                target="_blank"
                rel="noreferrer"
                className="dyn-link"
                style={{ '--link-color': '#00cfff' } as React.CSSProperties}
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/shanomz7235"
                target="_blank"
                rel="noreferrer"
                className="dyn-link"
                style={{ '--link-color': '#bf00ff' } as React.CSSProperties}
              >
                GITHUB
              </a>
              <a
                href="https://www.instagram.com/shanomz/"
                target="_blank"
                rel="noreferrer"
                className="dyn-link"
                style={{ '--link-color': '#ff2a6d' } as React.CSSProperties}
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Resume download */}
          <div className="px-card-pink">
            <p className="px-label mb-4" style={{ color: '#ff2a6d' }}>▌ RESUME</p>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-btn">
              [ DOWNLOAD RESUME.PDF ]
            </a>
          </div>

          {/* Availability */}
          <div
            className="px-card"
            style={{ borderColor: '#ffd700', boxShadow: '4px 4px 0 0 #ffd700' }}
          >
            <p className="font-pixel mb-3" style={{ fontSize: '8px', color: '#ffd700' }}>
              STATUS
            </p>
            <div className="flex items-center gap-3">
              <span
                className="animate-blink"
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  background: '#bf00ff',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '20px', color: '#c0c0d0' }}>
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  label,
  value,
  href,
  color,
}: {
  label: string
  value: string
  href?: string
  color: string
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="font-pixel"
        style={{ fontSize: '7px', color: '#8888aa', minWidth: 60, paddingTop: 4 }}
      >
        {label}
      </span>
      {href ? (
        <a href={href} className="contact-val-link" style={{ fontSize: '20px', color }}>
          {value}
        </a>
      ) : (
        <span style={{ fontSize: '20px', color }}>{value}</span>
      )}
    </div>
  )
}
