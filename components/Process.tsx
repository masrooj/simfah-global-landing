const steps = [
  { n: '01', title: 'Discovery', desc: 'Deep-dive workshops to map objectives, constraints, and success metrics with precision.' },
  { n: '02', title: 'Architecture', desc: 'AI-native system blueprints reviewed by senior architects before a line is written.' },
  { n: '03', title: 'Engineering', desc: 'Agile sprints with daily standups, automated testing, and continuous integration.' },
  { n: '04', title: 'QA & Security', desc: 'Automated test suites, manual QA, and penetration testing before deployment.' },
  { n: '05', title: 'Launch & Scale', desc: 'Zero-downtime go-live, live monitoring, and dedicated 24/7 growth support.' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="sw" style={{ textAlign: 'center' }}>
        <div className="stag reveal" style={{ justifyContent: 'center' }}>How We Work</div>
        <h2 className="sh reveal d1">Battle-Tested <span style={{ color: 'var(--fire)' }}>Process</span></h2>
        <p className="ss reveal d2" style={{ margin: '0 auto' }}>A methodology refined across 350+ enterprise deployments. Predictable delivery, zero surprises.</p>
      </div>
      <div className="sw">
        <div className="proc-steps">
          {steps.map((s, i) => (
            <div key={i} className={`step reveal d${i + 1}`}>
              <div className="step-c">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
