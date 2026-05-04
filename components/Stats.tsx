'use client'
import { useEffect, useRef } from 'react'

function Counter({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number
  prefix?: string
  suffix?: string
}) {
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
        el.textContent = `${prefix}${Math.round(ease * target)}${suffix}`
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, prefix, suffix])

  return (
    <div className="snum" ref={ref}>
      {prefix}0{suffix}
    </div>
  )
}

type StatItem = {
  target: number
  label: string
  desc: string
  prefix?: string
  suffix?: string
}

const stats: StatItem[] = [
  { target: 120, suffix: '+', label: 'Solutions Delivered', desc: 'Across global product launches' },
  { target: 99, suffix: '%', label: 'Client Satisfaction', desc: 'Based on active project feedback' },
  { target: 18, suffix: '+', label: 'Countries Served', desc: 'International delivery footprint' },
  { target: 24, suffix: '/7', label: 'Support Availability', desc: 'Mission-critical operations coverage' },
]

export default function Stats() {
  return (
    <section id="stats">
      <div className="stat-grid">
        {stats.map((s, i) => (
          <div key={i} className={`sblock reveal d${i + 1}`}>
            <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} />
            <div className="slabel">{s.label}</div>
            <div className="sdesc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
