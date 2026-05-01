'use client'
import { useEffect, useRef } from 'react'

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      let start = 0
      const dur = 2000
      const step = () => {
        start += 16
        const p = Math.min(start / dur, 1)
        const ease = 1 - Math.pow(1 - p, 4)
        el.textContent = String(Math.round(ease * target))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <div className="snum" ref={ref}>0</div>
}

const stats = [
  { target: 350, label: 'Projects Delivered', desc: 'Across 40+ countries' },
  { target: 98, label: 'Client Retention %', desc: 'Year-over-year loyalty' },
  { target: 120, label: 'Senior Engineers', desc: '6+ years min experience' },
  { target: 12, label: 'Years of Excellence', desc: 'Established 2012' },
]

export default function Stats() {
  return (
    <section id="stats">
      <div className="stat-grid">
        {stats.map((s, i) => (
          <div key={i} className={`sblock reveal d${i + 1}`}>
            <Counter target={s.target} />
            <div className="slabel">{s.label}</div>
            <div className="sdesc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
