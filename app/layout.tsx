import type { Metadata } from 'next'
import { Press_Start_2P, VT323 } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import AntigravityLoader from '@/components/AntigravityLoader'
import ClickSpark from '@/components/ClickSpark'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-retro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SHANOM.DEV',
  description: 'Pitchayakorn Saigate — Backend Developer & DevOps Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable}`}>
      <body>
        <ClickSpark sparkColor="#7b00cc" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500} extraScale={1.2}>
          {/* Particle background — fixed, behind everything */}
          <AntigravityLoader />
          <Navbar />
          <main className="pt-20 min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </main>
        </ClickSpark>
      </body>
    </html>
  )
}
