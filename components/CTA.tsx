import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function CTA() {
  // WhatsApp chat link (international format, no +)
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94777154524'
  const waText = encodeURIComponent('Hi Simfah Global, I am interested in your services!')
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`
  const [showPopup, setShowPopup] = useState(false)

  // Detect if device is mobile
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 768px)').matches


  // Copy WhatsApp number to clipboard
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('+' + waNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Always check for window and navigator
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      // Use a more robust mobile detection
      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(ua);
      if (!isMobileDevice) {
        e.preventDefault();
        setShowPopup(true);
      }
      // On mobile, let the link open WhatsApp app with compose message
    }
  }

  const handleClosePopup = () => setShowPopup(false)

  return (
    <section id="cta">
      <div className="sw">
        <h2 className="cta-title reveal">
          Let&apos;s Build the Future<br />
          <span className="cta-fire">AI, Apps & Digital Solutions</span><br />
          for Your Business
        </h2>
        <p className="cta-sub reveal d2">
          Unlock your next level of growth. Book a free strategy session or chat instantly with our team on WhatsApp. We deliver AI, web/mobile apps, ERP, CRM, fintech, real estate, tourism, and more globally.
        </p>
        <div className="cta-actions reveal d3">
          <Link href="#contact" className="btn-prim"><span>Book Free Strategy Call</span></Link>
          <a href="mailto:hello@simfahglobal.com" className="btn-sec">Email Us</a>
          <a
            href={waUrl}
            className="btn-sec btn-wa-uiux"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp style={{ marginRight: 8, fontSize: 18, verticalAlign: 'middle' }} />
            Chat on WhatsApp
          </a>
        </div>
        {/* Popup for desktop/web */}
        {showPopup && (
          <div
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0,0,0,0.45)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            onClick={handleClosePopup}
          >
            <div
              style={{
                background: 'var(--bg)', borderRadius: 16, padding: '7vw 4vw', minWidth: 0, width: '90vw', maxWidth: 400,
                boxShadow: '0 6px 32px rgba(255,109,0,0.13)', textAlign: 'center', position: 'relative', border: '2px solid var(--fire)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={handleClosePopup} style={{ position: 'absolute', top: 10, right: 18, background: 'none', border: 'none', fontSize: 28, color: 'var(--fire)', cursor: 'pointer', fontWeight: 700 }}>&times;</button>
              <FaWhatsapp style={{ color: '#25D366', fontSize: 44, marginBottom: 12 }} />
              <h3 style={{ color: 'var(--fire)', margin: '12px 0 18px', fontWeight: 800, fontFamily: 'Orbitron, sans-serif', fontSize: 26 }}>WhatsApp Us</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: '#25D366', letterSpacing: 1 }}>
                  +{waNumber}
                </span>
                <button onClick={handleCopy} style={{
                  background: 'var(--fire)', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', fontSize: 13, fontWeight: 700, cursor: 'pointer', marginLeft: 4, marginTop: 4
                }}>{copied ? 'Copied!' : 'Copy'}</button>
              </div>
              <div style={{ fontSize: 16, color: '#fff', marginBottom: 18, fontWeight: 500, lineHeight: 1.6 }}>
                Please message us on WhatsApp and provide your details (name, inquiry, company, etc.) to get more information.<br />
                <span style={{ color: 'var(--gold)', fontSize: 13, fontWeight: 400 }}>
                  We look forward to assisting you!
                </span>
              </div>
              <div style={{ fontSize: 13, color: '#aaa' }}>
                Copy the number, open WhatsApp Web or your phone, and send us your inquiry.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
