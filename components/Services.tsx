const services = [
  {
    num: '01',
    name: 'Artificial Intelligence & Machine Learning',
    desc: 'Custom AI/ML solutions including LLMs, computer vision, NLP, and autonomous agents. Architecting intelligence into your business.',
    tags: ['PyTorch', 'Python', 'K-means', 'MLflow']
  },
  {
    num: '02',
    name: 'Web & Mobile App Development',
    desc: 'Modern, scalable web and mobile applications tailored for your business needs, from MVP to enterprise-grade.',
    tags: ['React/Next', 'Node.js', 'React Native', 'Python', '.NET Core', 'Flutter']
  },
  { num: '03', 
    name: 'Enterprise Software & Digital Transformation', 
    desc: 'Legacy modernization, ERP integrations, API-first re-architecture, and change management frameworks that turn technical debt into competitive advantage. Mission-critical bespoke platforms built for the highest throughput. From fintech cores to healthcare systems — engineered to fail gracefully, scale infinitely.', 
    tags: ['ERP', 'CRM', 'Payroll', 'HR', 'POS', 'Microservices', 'Management Systems', 'Integration'] 
  },
  { num: '04',
    name: 'Data Intelligence', 
    desc: 'Real-time data pipelines, predictive analytics platforms, and BI dashboards that surface strategic insights from petabytes of structured and unstructured data.', 
    tags: ['Spark', 'Kafka', 'Snowflake', 'dbt'] 
  },

  {
    num: '05',
    name: 'Real Estate Management',
    desc: 'Cloud-based and on-premise platforms for real estate, property, and asset management.',
    tags: ['Agreement', 'Invoice', 'Bookkeeping', 'Tenat Management', 'Maintenance Scheduling']
  },
  {
    num: '06',
    name: 'Crypto Trading & Fintech',
    desc: 'Secure, high-performance crypto trading, fintech, and payment solutions with 3rd party integrations.',
    tags: ['Binance', 'Gate.io', 'Hummingbot', 'RESTful API']
  },
  {
    num: '07',
    name: 'Tourism, Booking & Itinerary',
    desc: 'Custom booking engines, itinerary management, and tourism platforms for seamless travel experiences.',
    tags: ['Hotel', 'Transport', 'Food', 'Itinerary Management', 'Booking Engine', 'Payment Integration']
  },
  {
    num: '08',
    name: 'Cloud-based & On-premise Solutions',
    desc: 'Multi-cloud architecture, zero-downtime deployments, Kubernetes orchestration, and GitOps pipelines. Infrastructure that heals itself and scales on demand. cloud-native or on-premise, tailored to your business and compliance needs.',
    tags: ['Azure', 'AWS', 'GCP', 'Digital Ocean','K8s', 'Docker']
  },
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
