'use client'

import Antigravity from './Antigravity'

export default function AntigravityBg() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Antigravity
        count={220}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.2}
        lerpSpeed={0.05}
        color="#9b30d0"
        autoAnimate={true}
        particleVariance={1}
        rotationSpeed={0.08}
        depthFactor={0.6}
        pulseSpeed={2.5}
        particleShape="capsule"
        fieldStrength={10}
      />
    </div>
  )
}
