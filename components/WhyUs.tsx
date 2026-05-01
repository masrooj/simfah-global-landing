'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const cards = [
  { icon: '⚡', title: '48h Kickoff', desc: 'Dedicated team assembled and project initiated within 48 hours of contract signing.' },
  { icon: '🔐', title: 'NDA-First', desc: 'Full IP protection and NDAs signed before any technical discussions begin.' },
  { icon: '📊', title: 'Full Transparency', desc: 'Real-time dashboards and weekly executive briefs — complete visibility, always.' },
  { icon: '🌍', title: '24/7 Global Support', desc: 'Round-the-clock dedicated support with sub-1-hour SLA response worldwide.' },
  { icon: '🏆', title: 'Senior-Only Teams', desc: 'No juniors on client projects. Every engineer has 6+ years relevant experience.' },
  { icon: '📐', title: 'Fixed-Price Options', desc: 'Milestone-based fixed-price contracts for well-scoped, defined engagements.' },
]

export default function WhyUs() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const dots: HTMLDivElement[] = []
    const angles: number[] = []
    const rafs: number[] = []

    ;[
      { r: 38, s: 0.7, c: 'var(--fire)' },
      { r: 48, s: -0.45, c: 'var(--gold)' },
      { r: 42, s: 0.95, c: 'var(--ember)' },
    ].forEach(({ r, s, c }, i) => {
      const dot = document.createElement('div')
      dot.style.cssText = `position:absolute;width:7px;height:7px;border-radius:50%;background:${c};box-shadow:0 0 10px ${c};top:50%;left:50%;pointer-events:none;z-index:4`
      stage.appendChild(dot)
      dots.push(dot)
      angles.push(i * 120)

      const ani = () => {
        const rad = angles[i] * Math.PI / 180
        const W2 = stage.offsetWidth / 2, H2 = stage.offsetHeight / 2
        dot.style.transform = `translate(${W2 + r * Math.cos(rad) - 3.5}px,${H2 * 1.3 + r * 0.26 * Math.sin(rad) - 3.5}px)`
        angles[i] += s
        rafs[i] = requestAnimationFrame(ani)
      }
      rafs[i] = requestAnimationFrame(ani)
    })

    return () => {
      rafs.forEach(id => cancelAnimationFrame(id))
      dots.forEach(d => d.remove())
    }
  }, [])

  return (
    <section id="why">
      <div className="sw">
        <div className="why-grid">
          <div className="reveal-l">
            <div className="stag">Competitive Edge</div>
            <h2 className="sh">Why Global Leaders<br /><span style={{ color: 'var(--fire)' }}>Choose SIMFAH</span></h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
              We are not a body shop. We are a strategic AI engineering partner that embeds with your organisation, understands your market deeply, and delivers outcomes — not just outputs.
            </p>
            <p style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.75, fontWeight: 300, marginBottom: 32 }}>
              From Series A startups to Fortune 500 enterprises, every client shares one experience: a technology partner that thinks commercially and executes at the very highest technical level.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#contact" className="btn-prim"><span>Talk to an Expert</span></Link>
              <Link href="#process" className="btn-sec">Our Process</Link>
            </div>
          </div>

          <div className="why-logo-block reveal-r">
            <div className="why-logo-stage" id="why-logo-stage" ref={stageRef}>
              <div className="why-logo-halo" />
              <div className="why-logo-halo2" />
              <div className="why-ring1" />
              <div className="why-ring2" />
              <div className="why-ring3" />
              <div className="why-logo-img-wrap">
                <img src="/simfah-logo.png" alt="SIMFAH Global"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/260x260/060402/FF6D00?text=S' }} />
              </div>
            </div>
            <div className="why-brand-label">
              <div className="why-brand-name">SIMFAH <span>Global</span></div>
              <div className="why-brand-slogan">Future-Ready Software Solutions</div>
            </div>
          </div>
        </div>

        <div className="why-cards-full">
          {cards.map((c, i) => (
            <div key={i} className={`wcard reveal d${i + 1}`}>
              <span className="wcard-icon">{c.icon}</span>
              <div className="wcard-title">{c.title}</div>
              <p className="wcard-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
