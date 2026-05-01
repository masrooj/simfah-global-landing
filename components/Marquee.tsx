const items = [
  'Artificial Intelligence', 'Neural Networks', 'Cloud Architecture',
  'Cybersecurity', 'Machine Learning', 'Digital Transformation',
  'Blockchain', 'Edge Computing', 'Quantum-Ready Systems',
]

export default function Marquee() {
  const text = items.map((item, i) => (
    <span key={i}>{item} <span className="dot">◆</span> </span>
  ))

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <span className="mitem">{text}</span>
        <span className="mitem">{text}</span>
      </div>
    </div>
  )
}
