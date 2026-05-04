'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current
    if (!c) return
    const cx = c.getContext('2d')!
    let W = 0, H = 0, rafId = 0

    const resize = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 0.9 + 0.2,
      a: Math.random() * 0.5 + 0.1,
      s: Math.random() * 0.003 + 0.001,
    }))

    class FP {
      x = 0; y = 0; vx = 0; vy = 0; life = 1; dec = 0; sz = 0; r = 255; g = 100; b = 0
      constructor() { this.rst() }
      rst() {
        this.x = Math.random() * W
        this.y = H + 20
        this.vx = (Math.random() - 0.5) * 0.7
        this.vy = -(Math.random() * 1.4 + 0.5)
        this.life = 1
        this.dec = Math.random() * 0.006 + 0.003
        this.sz = Math.random() * 3 + 0.8
        this.g = Math.floor(61 + Math.random() * 150)
      }
      update() { this.x += this.vx; this.y += this.vy; this.life -= this.dec; this.sz *= 0.997; if (this.life <= 0) this.rst() }
      draw() { cx.beginPath(); cx.arc(this.x, this.y, this.sz, 0, Math.PI * 2); cx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.life * 0.55})`; cx.fill() }
    }

    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0012,
      vy: (Math.random() - 0.5) * 0.0012,
      a: Math.random() * 0.5 + 0.2,
    }))
    const fps = Array.from({ length: 200 }, () => new FP())

    const loop = () => {
      cx.clearRect(0, 0, W, H)
      const g = cx.createRadialGradient(W * 0.4, H * 0.5, 0, W * 0.4, H * 0.5, W * 0.7)
      g.addColorStop(0, 'rgba(26,12,0,0.4)'); g.addColorStop(1, 'rgba(6,4,2,0.9)')
      cx.fillStyle = g; cx.fillRect(0, 0, W, H)

      cx.strokeStyle = 'rgba(255,109,0,0.04)'; cx.lineWidth = 0.5
      for (let x = 0; x < W; x += 70) { cx.beginPath(); cx.moveTo(x, 0); cx.lineTo(x, H); cx.stroke() }
      for (let y = 0; y < H; y += 70) { cx.beginPath(); cx.moveTo(0, y); cx.lineTo(W, y); cx.stroke() }

      stars.forEach(s => {
        cx.beginPath(); cx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        cx.fillStyle = `rgba(255,255,255,${s.a + Math.sin(Date.now() * s.s) * 0.12})`; cx.fill()
      })

      nodes.forEach(n => { n.x = (n.x + n.vx + 1) % 1; n.y = (n.y + n.vy + 1) % 1 })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = (nodes[i].x - nodes[j].x) * W, dy = (nodes[i].y - nodes[j].y) * H
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < W * 0.18) {
            cx.beginPath(); cx.moveTo(nodes[i].x * W, nodes[i].y * H)
            cx.lineTo(nodes[j].x * W, nodes[j].y * H)
            cx.strokeStyle = `rgba(255,109,0,${(1 - d / (W * 0.18)) * 0.12})`; cx.lineWidth = 0.6; cx.stroke()
          }
        }
        cx.beginPath(); cx.arc(nodes[i].x * W, nodes[i].y * H, 1.5, 0, Math.PI * 2)
        cx.fillStyle = `rgba(255,109,0,${nodes[i].a * 0.5})`; cx.fill()
      }

      fps.forEach(p => { p.update(); p.draw() })
      rafId = requestAnimationFrame(loop)
    }
    loop()

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(rafId) }
  }, [])

  return <canvas ref={ref} id="hero-canvas" />
}

function NNCanvas({ id }: { id: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current
    if (!c) return
    const cx = c.getContext('2d')!
    c.width = c.offsetWidth; c.height = c.offsetHeight
    const W = c.width, H = c.height
    let rafId = 0

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5, a: Math.random() * 0.7 + 0.3,
    }))

    const loop = () => {
      cx.clearRect(0, 0, W, H)
      nodes.forEach(n => { n.x = (n.x + n.vx + W) % W; n.y = (n.y + n.vy + H) % H })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            cx.beginPath(); cx.moveTo(nodes[i].x, nodes[i].y); cx.lineTo(nodes[j].x, nodes[j].y)
            cx.strokeStyle = `rgba(255,109,0,${(1 - d / 100) * 0.25})`; cx.lineWidth = 0.8; cx.stroke()
          }
        }
        cx.beginPath(); cx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2)
        cx.fillStyle = `rgba(255,214,0,${nodes[i].a * 0.55})`; cx.fill()
      }
      rafId = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(rafId)
  }, [])

  return <canvas ref={ref} id={id} />
}

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const dots: HTMLDivElement[] = []
    const angles: number[] = []
    const configs = [
      { r: 48, s: 0.8, c: 'var(--fire)' },
      { r: 60, s: -0.5, c: 'var(--gold)' },
      { r: 52, s: 1.1, c: 'var(--ember)' },
    ]
    const rafs: number[] = []

    configs.forEach(({ r, s, c }, i) => {
      const dot = document.createElement('div')
      dot.style.cssText = `position:absolute;width:9px;height:9px;border-radius:50%;background:${c};box-shadow:0 0 12px ${c};top:50%;left:50%;pointer-events:none;z-index:4`
      stage.appendChild(dot)
      dots.push(dot)
      angles.push(i * 120)

      const ani = () => {
        const rad = angles[i] * Math.PI / 180
        const W2 = stage.offsetWidth / 2, H2 = stage.offsetHeight / 2
        dot.style.transform = `translate(${W2 + r * Math.cos(rad) - 4.5}px,${H2 * 1.35 + r * 0.28 * Math.sin(rad) - 4.5}px)`
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
    <section id="hero">
      <HeroCanvas />
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">
            <div className="hero-tag-dot" />
            <span>AI-Powered · Enterprise Software · Global Scale</span>
          </div>
          <div className="hero-slogan">⚡ Ignite. Innovate. Dominate.</div>
          <h1 className="hero-title">
            We Engineer<br />
            <span className="fire">Digital</span>
            <span className="ghost">Empires</span>
          </h1>
          <p className="hero-sub">
            Simfah Global designs and ships secure digital platforms, AI products, and cloud ecosystems
            for companies scaling across regions.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="btn-prim"><span>Launch Your Vision</span></Link>
            <Link href="#services" className="btn-sec">Explore Services</Link>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <div className="hstat-num"><span data-target="120">120</span><sup>+</sup></div>
              <div className="hstat-label">Solutions Delivered</div>
            </div>
            <div className="hstat">
              <div className="hstat-num"><span data-target="99">99</span><sup>%</sup></div>
              <div className="hstat-label">Client Satisfaction</div>
            </div>
            <div className="hstat">
              <div className="hstat-num"><span data-target="18">18</span><sup>+</sup></div>
              <div className="hstat-label">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="logo-stage" ref={stageRef}>
            <NNCanvas id="nn-canvas" />
            <div className="logo-halo" />
            <div className="logo-halo2" />
            <div className="ring ring1" />
            <div className="ring ring2" />
            <div className="ring ring3" />
            <div className="logo-img-wrap">
              <img src="/simfah-logo.png" alt="SIMFAH Global"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/380x380/060402/FF6D00?text=S' }} />
            </div>
            <div className="hud hud-tl" />
            <div className="hud hud-tr" />
            <div className="hud hud-bl" />
            <div className="hud hud-br" />
            <div className="scan-line" />
            <div className="hud-data hd-tl">SYS_ONLINE<br />v4.7.2</div>
            <div className="hud-data hd-tr">AI_CORE<br />ACTIVE</div>
            <div className="hud-data hd-bl">NODES: 247</div>
            <div className="hud-data hd-br">UPTIME: 99.99%</div>
          </div>
        </div>
      </div>
    </section>
  )
}
