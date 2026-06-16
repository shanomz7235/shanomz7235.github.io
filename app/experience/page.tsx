const WORK = [
  {
    title: 'Humanica Co., Ltd.',
    role: 'Associate Software Developer',
    date: 'Nov 2025 – Present',
    desc: '',
    bullets: [
      'Developed and maintained backend services using Go (Golang) for enterprise HR systems',
      'Designed and implemented RESTful APIs to support business workflows and data operations',
      'Built data aggregation and transformation logic across multiple services',
      'Optimized system performance using Redis caching to reduce database load',
      'Implemented complex business logic for large-scale data processing',
      'Wrote efficient SQL queries and handled relational data using SQL Server',
      'Collaborated with Frontend, QA, and SA to refine requirements and ensure end-to-end system reliability',
      'Worked in Agile environment using GitLab and Jira',
    ],
    images: [] as string[],
    color: '#bf00ff',
    status: 'CURRENT',
    tags: ['Golang', 'RESTful API', 'Redis', 'SQL Server', 'GitLab', 'Jira', 'Agile'],
  },
  {
    title: 'Transcode Co., Ltd.',
    role: 'Research and Development Intern',
    date: 'Jan 2025 – Apr 2025',
    desc: '',
    bullets: [
      'Designed and developed a Device Monitoring System for tracking devices',
      'Built a matching engine to compare incoming device data with entries in the database to determine status',
      'Integrated MQTT protocol to receive real-time data from IoT devices and process them with server-side logic',
      'Created a web interface for displaying device status using NestJS and NextJS',
    ],
    images: [] as string[],
    color: '#00cfff',
    status: 'COMPLETED',
    tags: ['NestJS', 'NextJS', 'MQTT', 'IoT', 'Device Monitoring'],
  },
]

const QUESTS = [
  {
    title: 'TESA Top Gun Rally 2023',
    role: '',
    date: '19 – 25 November 2023',
    desc: 'Built a server and connected it to a database using Docker, Streamlit, and MQTT. Participated in a competitive embedded systems event.',
    bullets: [] as string[],
    images: ['/images/tgr1.jpg', '/images/tgr2.jpg'],
    color: '#bf00ff',
    status: 'COMPLETED',
    tags: ['Docker', 'Streamlit', 'MQTT'],
  },
  {
    title: 'SIT Open House 2023 "IT มีดี We Share"',
    role: 'Coding Assistant',
    date: '12 October 2023',
    desc: 'Created an intelligent aquarium called Fish Plant Planet IoT. Served as coding assistant for sensor integration and automation.',
    bullets: [] as string[],
    images: ['/images/op1.jpg'],
    color: '#00cfff',
    status: 'COMPLETED',
    tags: ['IoT', 'Sensors', 'Automation'],
  },
  {
    title: "Let's Celebrate 53rd SPU Tech Fest 2023",
    role: 'Coding Assistant & Circuit Designer',
    date: '25 July 2023',
    desc: 'Created Smart Glow Light — a plant-growing system that ensures plants receive continuous light by rotating the light source.',
    bullets: [] as string[],
    images: ['/images/tm2.jpg'],
    color: '#ff2a6d',
    status: 'COMPLETED',
    tags: ['Arduino', 'Circuit Design', 'IoT'],
  },
]

const SELF = [
  {
    title: 'DevOps Self-Training',
    role: '',
    date: '2023 – Present',
    desc: '',
    bullets: [
      'Self-studied DevOps fundamentals: Linux, Docker, and AWS Cloud',
      'Deployed APIs on AWS Cloud using Docker containers',
      'Created and pushed Docker images to Docker Hub, then deployed on AWS',
    ],
    images: ['/images/devops1.png', '/images/devops2.png'],
    color: '#ffd700',
    status: 'IN PROGRESS',
    tags: ['Linux', 'Docker', 'AWS', 'DevOps'],
  },
]

interface Quest {
  title: string
  role: string
  date: string
  desc: string
  bullets: string[]
  images: string[]
  color: string
  status: string
  tags: string[]
}

function QuestCard({ q }: { q: Quest }) {
  return (
    <div
      style={{
        background: '#0e0818',
        border: `3px solid ${q.color}`,
        boxShadow: `4px 4px 0 0 ${q.color}`,
        marginBottom: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Images on top — full width */}
      {q.images.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${q.images.length}, 1fr)` }}>
          {q.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={q.title}
              style={{
                width: '100%',
                height: 320,
                objectFit: 'cover',
                display: 'block',
                borderBottom: `3px solid ${q.color}`,
                borderRight: i < q.images.length - 1 ? `2px solid ${q.color}` : 'none',
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '1.5rem 1.75rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
          <h2 className="font-pixel" style={{ fontSize: 'clamp(9px, 1.5vw, 12px)', color: '#e0e0e0', lineHeight: 1.7 }}>
            {q.title.toUpperCase()}
          </h2>
          <span className="font-pixel" style={{ fontSize: '7px', padding: '4px 10px', border: `2px solid ${q.color}`, color: q.color, flexShrink: 0 }}>
            {q.status}
          </span>
        </div>

        {q.role && (
          <p className="font-pixel" style={{ fontSize: '7px', color: '#9988bb', marginBottom: 6 }}>
            {q.role}
          </p>
        )}

        <p className="font-pixel" style={{ fontSize: '7px', color: q.color, letterSpacing: 1, marginBottom: '1rem' }}>
          {q.date}
        </p>

        {/* Plain description */}
        {q.desc && (
          <p style={{ fontSize: '19px', color: '#c0c0d0', lineHeight: 1.75, marginBottom: '1rem' }}>
            {q.desc}
          </p>
        )}

        {/* Bullet points */}
        {q.bullets.length > 0 && (
          <ul style={{ marginBottom: '1rem', paddingLeft: 0, listStyle: 'none' }}>
            {q.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: q.color, fontSize: '18px', lineHeight: 1.6, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: '19px', color: '#c0c0d0', lineHeight: 1.65 }}>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {q.tags.map(tag => (
            <span key={tag} style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '7px', padding: '5px 9px', border: `1px solid ${q.color}`, color: q.color, background: `${q.color}18` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="px-label mb-3">ADVENTURE LOG</p>
        <h1 className="px-title" style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>EXPERIENCE</h1>
        <div className="px-divider" style={{ maxWidth: 300 }} />
      </div>

      <div className="mb-10">
        <p className="px-label mb-6" style={{ color: '#bf00ff' }}>◆ WORK EXPERIENCE</p>
        {WORK.map(q => <QuestCard key={q.title} q={q} />)}
      </div>

      <div className="mb-10">
        <p className="px-label mb-6" style={{ color: '#00cfff' }}>◆ EVENTS &amp; COMPETITIONS</p>
        {QUESTS.map(q => <QuestCard key={q.title} q={q} />)}
      </div>

      <div>
        <p className="px-label mb-6" style={{ color: '#ffd700' }}>◆ SELF-TRAINING</p>
        {SELF.map(q => <QuestCard key={q.title} q={q} />)}
      </div>
    </section>
  )
}
