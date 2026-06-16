const EDUCATION = [
  {
    period: '2021 – 2025',
    school: 'Sripatum University',
    major: 'Bachelor of Computer Engineering — Faculty of Information Technology',
    color: '#bf00ff',
  },
  {
    period: '2018 – 2020',
    school: 'Rittiyawannalai School',
    major: 'High School — Science & Math',
    color: '#00cfff',
  },
  {
    period: '2014 – 2017',
    school: 'Rittiyawannalai School',
    major: 'Middle School — Science & Math',
    color: '#ffd700',
  },
]

export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="px-label mb-3">ACHIEVEMENT LOG</p>
        <h1 className="px-title" style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>
          EDUCATION
        </h1>
        <div className="px-divider" style={{ maxWidth: 300 }} />
      </div>

      <div className="flex flex-col gap-10 items-center" style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Timeline */}
        <div className="w-full space-y-0">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline column */}
              <div className="flex flex-col items-center" style={{ paddingTop: 6 }}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    background: edu.color,
                    border: '2px solid #050308',
                    flexShrink: 0,
                  }}
                />
                {i < EDUCATION.length - 1 && (
                  <div
                    style={{
                      width: 3,
                      flex: 1,
                      background: edu.color,
                      minHeight: 60,
                      marginTop: 2,
                      opacity: 0.4,
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="mb-8 flex-1"
                style={{
                  background: '#0e0818',
                  border: `3px solid ${edu.color}`,
                  boxShadow: `4px 4px 0 0 ${edu.color}`,
                  padding: '1.25rem 1.5rem',
                }}
              >
                <p
                  className="font-pixel mb-2"
                  style={{ fontSize: '8px', color: edu.color, letterSpacing: 1 }}
                >
                  {edu.period}
                </p>
                <h2
                  className="font-pixel mb-1"
                  style={{ fontSize: 'clamp(9px, 1.5vw, 12px)', color: '#e0e0e0' }}
                >
                  {edu.school.toUpperCase()}
                </h2>
                <p style={{ fontSize: '18px', color: '#8888aa', marginTop: 6 }}>
                  {edu.major}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
