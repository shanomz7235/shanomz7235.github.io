import LogoLoop from '@/components/LogoLoop'
import {
  SiGo, SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiNextdotjs, SiNestjs,
  SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiGitlab, SiLinux, SiRedis, SiPostman, SiGnubash, SiArduino,
} from 'react-icons/si'

const techLogos = [
  { node: <SiGo />,           title: 'Golang',     color: '#00ADD8' },
  { node: <SiPython />,       title: 'Python',     color: '#3776AB' },
  { node: <SiTypescript />,   title: 'TypeScript', color: '#3178C6' },
  { node: <SiJavascript />,   title: 'JavaScript', color: '#F7DF1E' },
  { node: <SiCplusplus />,    title: 'C++',        color: '#00599C' },
  { node: <SiNextdotjs />,    title: 'Next.js',    color: '#ffffff' },
  { node: <SiNestjs />,       title: 'NestJS',     color: '#E0234E' },
  { node: <SiPostgresql />,   title: 'PostgreSQL', color: '#4169E1' },
  { node: <SiMongodb />,      title: 'MongoDB',    color: '#47A248' },
  { node: <SiDocker />,       title: 'Docker',     color: '#2496ED' },
  { node: <SiGit />,          title: 'Git',        color: '#F05032' },
  { node: <SiGitlab />,       title: 'GitLab',     color: '#FCA121' },
  { node: <SiLinux />,        title: 'Linux',      color: '#FCC624' },
  { node: <SiRedis />,        title: 'Redis',      color: '#DC382D' },
  { node: <SiPostman />,      title: 'Postman',    color: '#FF6C37' },
  { node: <SiGnubash />,      title: 'Bash',       color: '#4EAA25' },
  { node: <SiArduino />,      title: 'Arduino',    color: '#00979D' },
]

const LANGUAGES  = ['Golang', 'Python', 'TypeScript', 'C', 'C++', 'JavaScript']
const FRAMEWORKS = ['Go Fiber', 'Gin', 'NextJS', 'NestJS']
const DATABASES  = ['SQL Server', 'PostgreSQL', 'MongoDB']
const TOOLS      = ['Docker', 'Git / GitLab', 'Linux (Ubuntu)', 'JWT Auth', 'RESTful API', 'Redis', 'Postman', 'Bash', 'Arduino']
const LEARNING   = ['AWS']

function BadgeGroup({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div style={{ background: '#0e0818', border: `3px solid ${color}`, boxShadow: `4px 4px 0 0 ${color}`, padding: '1.5rem', marginBottom: '1.25rem' }}>
      <p className="font-pixel mb-5" style={{ fontSize: '8px', color, letterSpacing: 1 }}>▌ {title}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
        {items.map(s => (
          <div key={s} style={{ padding: '12px 16px', border: `2px solid ${color}`, background: `${color}12`, boxShadow: `2px 2px 0 0 ${color}` }}>
            <span className="font-pixel" style={{ fontSize: '8px', color, letterSpacing: 1 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="px-label mb-3">CHARACTER STATS</p>
        <h1 className="px-title" style={{ fontSize: 'clamp(16px, 3vw, 24px)' }}>SKILL TREE</h1>
        <div className="px-divider" style={{ maxWidth: 300 }} />
      </div>

      {/* Logo loop */}
      <div className="mb-10" style={{ overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos.map(t => ({
            node: <span style={{ color: t.color, display: 'flex', alignItems: 'center', gap: 8 }}>
              {t.node}
              <span className="font-pixel" style={{ fontSize: '7px', color: t.color, whiteSpace: 'nowrap' }}>{t.title}</span>
            </span>,
            title: t.title,
          }))}
          speed={60}
          direction="left"
          logoHeight={32}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#050308"
          ariaLabel="Tech stack"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left — skill groups */}
        <div className="lg:col-span-2">
          <BadgeGroup title="PROGRAMMING LANGUAGES" items={LANGUAGES}  color="#bf00ff" />
          <BadgeGroup title="FRAMEWORKS"             items={FRAMEWORKS} color="#00cfff" />
          <BadgeGroup title="DATABASES"              items={DATABASES}  color="#ffd700" />
          <BadgeGroup title="TOOLS &amp; TECHNOLOGIES" items={TOOLS}   color="#00cfff" />
          <BadgeGroup title="CURRENTLY LEARNING"    items={LEARNING}   color="#ff2a6d" />
        </div>

        {/* Right — soft skills + spoken languages */}
        <div className="space-y-6">
          <div style={{ background: '#0e0818', border: '3px solid #bf00ff', boxShadow: '4px 4px 0 0 #bf00ff', padding: '1.5rem' }}>
            <p className="font-pixel mb-4" style={{ fontSize: '8px', color: '#bf00ff' }}>▌ SOFT SKILLS</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Problem-solving & analytical thinking',
                'Cross-functional team communication',
                'Collaborative Agile mindset',
                'Adaptability to new technologies',
                'Attention to detail in backend development',
              ].map(s => (
                <li key={s} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ color: '#bf00ff', flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: '17px', color: '#c0c0d0', lineHeight: 1.5 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: '#0e0818', border: '3px solid #9988bb', padding: '1.25rem' }}>
            <p className="font-pixel mb-3" style={{ fontSize: '7px', color: '#9988bb' }}>LANGUAGES</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="font-pixel" style={{ fontSize: '8px', color: '#bf00ff', border: '1px solid #bf00ff', padding: '5px 8px' }}>Thai (Native)</span>
              <span className="font-pixel" style={{ fontSize: '8px', color: '#9988bb', border: '1px solid #9988bb', padding: '5px 8px' }}>English (Mid)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
