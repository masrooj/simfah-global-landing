const tech = [
  { icon: '🧠', name: 'PyTorch' }, { icon: '⚛', name: 'React' },
  { icon: '☁️', name: 'AWS' }, { icon: '🐳', name: 'Docker' },
  { icon: '⚙️', name: 'Kubernetes' }, { icon: '🔷', name: 'TypeScript' },
  { icon: '🗄', name: 'PostgreSQL' }, { icon: '🔥', name: 'Node.js' },
  { icon: '📱', name: 'Flutter' }, { icon: '🌐', name: 'GraphQL' },
  { icon: '🤖', name: 'LangChain' }, { icon: '☸', name: 'Terraform' },
]

const delays = ['d1','d1','d2','d2','d3','d3','d4','d4','d5','d5','d6','d6']

export default function Tech() {
  return (
    <section id="tech">
      <div className="sw">
        <div style={{ textAlign: 'center' }}>
          <div className="stag reveal" style={{ justifyContent: 'center' }}>Technology Arsenal</div>
          <h2 className="sh reveal d1" style={{ textAlign: 'center' }}>Powered by <span style={{ color: 'var(--fire)' }}>Precision</span></h2>
        </div>
        <div className="tech-grid">
          {tech.map((t, i) => (
            <div key={i} className={`titem reveal ${delays[i]}`}>
              <span className="ticon">{t.icon}</span>
              <span className="tname">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
