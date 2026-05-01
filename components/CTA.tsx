import Link from 'next/link'

export default function CTA() {
  return (
    <section id="cta">
      <div className="sw">
        <h2 className="cta-title reveal">
          Ready to Build<br />
          <span className="cta-fire">Something</span><br />
          Extraordinary?
        </h2>
        <p className="cta-sub reveal d2">
          Book a free 60-minute AI strategy session with our senior engineering team. No salespeople — only experts.
        </p>
        <div className="cta-actions reveal d3">
          <Link href="#contact" className="btn-prim"><span>Book Free Strategy Call</span></Link>
          <a href="mailto:hello@simfahglobal.com" className="btn-sec">hello@simfahglobal.com</a>
        </div>
      </div>
    </section>
  )
}
