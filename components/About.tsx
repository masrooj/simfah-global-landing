'use client'
import { useEffect, useRef } from 'react'

function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current
    if (!c) return
    const cx = c.getContext('2d')!
    c.width = c.offsetWidth; c.height = c.offsetHeight
    const W = c.width, H = c.height
    let rafId = 0

    const nodes = Array.from({ length: 32 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5, a: Math.random() * 0.6 + 0.2,
    }))

    const loop = () => {
      cx.clearRect(0, 0, W, H)
      nodes.forEach(n => { n.x = (n.x + n.vx + W) % W; n.y = (n.y + n.vy + H) % H })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < W * 0.22) {
            cx.beginPath(); cx.moveTo(nodes[i].x, nodes[i].y); cx.lineTo(nodes[j].x, nodes[j].y)
            cx.strokeStyle = `rgba(255,109,0,${(1 - d / (W * 0.22)) * 0.2})`; cx.lineWidth = 0.7; cx.stroke()
          }
        }
        cx.beginPath(); cx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2)
        cx.fillStyle = `rgba(255,109,0,${nodes[i].a * 0.5})`; cx.fill()
      }
      rafId = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(rafId)
  }, [])

  return <canvas ref={ref} id="nn2-canvas" />
}

export default function About() {
  return (
    <section id="about">
      <div className="sw about-grid">
        <div className="about-vis reveal-l">
          <div className="av-inner">
            <NeuralCanvas />
            <div className="av-glow" />
            <div className="av-rings">
              <div className="avr avr1" />
              <div className="avr avr2" />
            </div>
            <div className="av-logo">
              <img src="/simfah-logo.png" alt="SIMFAH Global"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x300/060402/FF6D00?text=S' }} />
            </div>
          </div>
        </div>

        <div className="reveal-r">
          <div className="stag">Our Mission</div>
          <h2 className="sh">Built for the<br /><span style={{ color: 'var(--fire)' }}>Global Stage</span></h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 14 }}>
            SIMFAH Global is a tier-1 AI-native software engineering firm. We don't just write code — we architect competitive advantages that compound over time, turning technology into the most powerful asset your business owns.
          </p>
          <p style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }}>
            Our 120+ engineers, AI researchers, and product architects operate at the intersection of deep technical mastery and commercial intelligence — delivering measurable ROI from day one.
          </p>
          <div className="pts">
            <div className="pt">
              <div className="pt-ic">
                <svg width="18" height="18" fill="none" stroke="#FF6D00" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <div>
                <div className="pt-title">AI-Native from the Ground Up</div>
                <div className="pt-desc">Every system we build is intelligence-first. Neural reasoning, not bolted-on automation.</div>
              </div>
            </div>
            <div className="pt">
              <div className="pt-ic">
                <svg width="18" height="18" fill="none" stroke="#FF6D00" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" /></svg>
              </div>
              <div>
                <div className="pt-title">Genuinely Global Operations</div>
                <div className="pt-desc">Delivery centres across Asia, Europe, and the Americas — your timezone, always.</div>
              </div>
            </div>
            <div className="pt">
              <div className="pt-ic">
                <svg width="18" height="18" fill="none" stroke="#FFD600" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div>
                <div className="pt-title">Security-First Architecture</div>
                <div className="pt-desc">SOC 2 Type II. ISO 27001. Zero-trust by default. Security is the foundation, never an afterthought.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
