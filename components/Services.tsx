const services = [
  { num: '01', name: 'AI & Neural Engineering', desc: "Custom LLMs, computer vision, NLP pipelines, and autonomous agents. We don't just integrate AI — we architect intelligence into the core of your product.", tags: ['PyTorch', 'LangChain', 'GPT-4', 'MLflow'] },
  { num: '02', name: 'Enterprise Software', desc: 'Mission-critical bespoke platforms built for the highest throughput. From fintech cores to healthcare systems — engineered to fail gracefully, scale infinitely.', tags: ['Python', 'Go', 'Java', 'Microservices'] },
  { num: '03', name: 'Cloud & DevOps', desc: 'Multi-cloud architecture, zero-downtime deployments, Kubernetes orchestration, and GitOps pipelines. Infrastructure that heals itself and scales on demand.', tags: ['AWS', 'Azure', 'Terraform', 'K8s'] },
  { num: '04', name: 'Data Intelligence', desc: 'Real-time data pipelines, predictive analytics platforms, and BI dashboards that surface strategic insights from petabytes of structured and unstructured data.', tags: ['Spark', 'Kafka', 'Snowflake', 'dbt'] },
  { num: '05', name: 'Cybersecurity', desc: "Zero-trust architecture, SOC 2 compliance, AI-powered threat detection, penetration testing, and enterprise SIEM implementation. Security is not a layer — it is the foundation.", tags: ['Zero Trust', 'SIEM', 'VAPT', 'SOC2'] },
  { num: '06', name: 'Digital Transformation', desc: 'Legacy modernisation, ERP integrations, API-first re-architecture, and change management frameworks that turn technical debt into competitive advantage.', tags: ['ERP', 'Salesforce', 'SAP', 'GraphQL'] },
]

export default function Services() {
  return (
    <section id="services">
      <div className="sw">
        <div className="stag reveal">What We Build</div>
        <h2 className="sh reveal d1">Core <span style={{ color: 'var(--fire)' }}>Capabilities</span></h2>
        <p className="ss reveal d2">End-to-end software solutions built on AI-native architectures — engineered for performance, scalability, and global competitive advantage.</p>
        <div className="srv-grid">
          {services.map((s, i) => (
            <div key={i} className={`srv reveal d${i + 1}`}>
              <div className="srv-num">{s.num}</div>
              <div className="srv-name">{s.name}</div>
              <p className="srv-desc">{s.desc}</p>
              <div className="srv-tags">
                {s.tags.map(t => <span key={t} className="stk">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
