const tech = [
  { icon: '⚙️', name: '.NET Core' },
  { icon: '💻', name: 'C#' },
  { icon: '🌐', name: 'ASP.NET MVC' },
  { icon: '🔥', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '⚛', name: 'React' },
  { icon: '🌀', name: 'Redux' },
  { icon: '📱', name: 'React Native' },
  { icon: '📦', name: 'Cordova' },
  { icon: '🗄️', name: 'MSSQL' },
  { icon: '🐬', name: 'MySQL' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🦉', name: 'PostgreSQL' },
  { icon: '🧩', name: 'SQLite' },
  { icon: '🗃️', name: 'Couchbase' },
  { icon: '🗂️', name: 'PouchDB' },
  { icon: '🧠', name: 'Machine Learning' },
  { icon: '☁️', name: 'Azure' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🔧', name: 'TeamCity' },
  { icon: '🔗', name: 'Git' },
  { icon: '🗃️', name: 'SVN' },
  { icon: '🔵', name: 'BitBucket' },
  { icon: '🔌', name: 'RESTful APIs' },
  { icon: '💬', name: 'WebSocket' },
  { icon: '📡', name: 'RabbitMQ' },
  { icon: '🧪', name: 'K-means' },
  { icon: '📈', name: 'Cointegration' },
  { icon: '🔄', name: 'Mean Reversion' },
  { icon: '🤖', name: 'Hummingbot' },
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
