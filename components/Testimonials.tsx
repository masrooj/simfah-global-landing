const testimonials = [
  {
    text: "SIMFAH rebuilt our entire payments infrastructure in 14 weeks. Their technical depth is extraordinary — they identified architectural flaws our previous vendor missed for two years. ROI was positive within the first quarter.",
    initials: 'MR', name: 'Marcus Reynolds', role: 'CTO · FinTech Unicorn, UK',
  },
  {
    text: "We evaluated 12 firms globally. SIMFAH was the only one that presented a phased AI architecture strategy rather than jumping straight to a quote. That commercial intelligence made the decision easy.",
    initials: 'AS', name: 'Aisha Suleiman', role: 'VP Engineering · Global Logistics Corp',
  },
  {
    text: "The AI platform SIMFAH built processes 50M+ transactions daily with 99.99% uptime. Their ML team understood our domain deeply and delivered a model outperforming benchmarks by 34%. Exceptional.",
    initials: 'JT', name: 'James Thornton', role: 'CEO · HealthTech Platform, USA',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="sw">
        <div style={{ textAlign: 'center' }}>
          <div className="stag reveal" style={{ justifyContent: 'center' }}>Client Voices</div>
          <h2 className="sh reveal d1" style={{ textAlign: 'center' }}>What Leaders <span style={{ color: 'var(--fire)' }}>Say</span></h2>
        </div>
        <div className="testi-track">
          {testimonials.map((t, i) => (
            <div key={i} className={`tc reveal d${i + 1}`}>
              <p className="tc-text">{t.text}</p>
              <div className="tc-author">
                <div className="tc-av">{t.initials}</div>
                <div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
