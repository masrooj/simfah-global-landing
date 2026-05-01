'use client'
import { useState, useRef } from 'react'

const TO = 'hello@simfahglobal.com'

export default function Contact() {
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null)
  const [btnLabel, setBtnLabel] = useState('Send Message')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = formRef.current!
    const firstName = (form.querySelector('#firstName') as HTMLInputElement).value.trim()
    const lastName = (form.querySelector('#lastName') as HTMLInputElement).value.trim()
    const company = (form.querySelector('#company') as HTMLInputElement).value.trim()
    const email = (form.querySelector('#senderEmail') as HTMLInputElement).value.trim()
    const service = (form.querySelector('#service') as HTMLSelectElement).value
    const brief = (form.querySelector('#brief') as HTMLTextAreaElement).value.trim()

    if (!firstName || !email || !brief) {
      setMsg({ text: '⚠  Please fill in First Name, Email, and Project Brief.', ok: false })
      return
    }

    setBtnLabel('Sending...')
    setMsg(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, company, email, service, brief }),
      })
      if (res.ok) {
        setMsg({ text: '✓  Your message was sent successfully!', ok: true })
        form.reset()
      } else {
        setMsg({ text: '⚠  Failed to send message. Please try again later.', ok: false })
      }
    } catch {
      setMsg({ text: '⚠  Network error. Please try again.', ok: false })
    }
    setBtnLabel('Send Message')
  }

  return (
    <section id="contact">
      <div className="sw contact-grid">
        <div className="reveal-l">
          <div className="stag">Get In Touch</div>
          <h2 className="sh">Let's Build<br /><span style={{ color: 'var(--fire)' }}>Together</span></h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
            Fill in the form and a senior engineer will contact you within 24 hours. No salespeople — just experts ready to solve real problems.
          </p>

          <div className="ci">
            <div className="ci-ic">
              <svg width="15" height="15" fill="none" stroke="#FF6D00" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="ci-label">Phone</div>
              <div className="ci-val">+94 77 000 0000</div>
            </div>
          </div>

          <div className="ci">
            <div className="ci-ic">
              <svg width="15" height="15" fill="none" stroke="#FF6D00" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="ci-label">Email</div>
              <div className="ci-val">hello@simfahglobal.com</div>
            </div>
          </div>

          <div className="ci">
            <div className="ci-ic">
              <svg width="15" height="15" fill="none" stroke="#FF6D00" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="ci-label">Headquarters</div>
              <div className="ci-val">Colombo, Sri Lanka · Global Reach</div>
            </div>
          </div>
        </div>

        <div className="reveal-r">
          <form className="cf" ref={formRef} onSubmit={handleSubmit}>
            <div className="cf-row">
              <div className="fg">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="John" />
              </div>
              <div className="fg">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Smith" />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Acme Corporation" />
            </div>
            <div className="fg">
              <label htmlFor="senderEmail">Email</label>
              <input id="senderEmail" type="email" placeholder="john@company.com" />
            </div>
            <div className="fg">
              <label htmlFor="service">Service Interest</label>
              <select id="service">
                <option>AI & Neural Engineering</option>
                <option>Enterprise Software</option>
                <option>Cloud & DevOps</option>
                <option>Data Intelligence</option>
                <option>Cybersecurity</option>
                <option>Digital Transformation</option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="brief">Project Brief</label>
              <textarea id="brief" placeholder="Describe your project, timeline, and budget range..." />
            </div>
            {msg && (
              <div style={{
                padding: '11px 14px', borderRadius: 3,
                fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: 1,
                background: msg.ok ? 'rgba(0,200,100,0.08)' : 'rgba(255,61,0,0.10)',
                border: msg.ok ? '1px solid rgba(0,200,100,0.30)' : '1px solid rgba(255,61,0,0.30)',
                color: msg.ok ? '#00c864' : '#FF6D00',
              }}>
                {msg.text}
              </div>
            )}
            <button className="sbtn" type="submit">{btnLabel}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
