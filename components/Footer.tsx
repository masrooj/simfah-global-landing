import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div className="ft-top">
          <div className="ft-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <img src="/simfah-logo.png" style={{ width: 36, height: 36, objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(255,109,0,0.6))' }} alt=""
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 14, fontWeight: 800, letterSpacing: 3 }}>
                SIMFAH <span style={{ color: 'var(--fire)' }}>GLOBAL</span>
              </span>
            </div>
            <p>Engineering the intelligent software backbone of tomorrow's global enterprises. Trusted by leaders across 40+ countries.</p>
            <div className="ft-socials">
              <a href="#" className="fsoc">in</a>
              <a href="#" className="fsoc">tw</a>
              <a href="#" className="fsoc">gh</a>
              <a href="#" className="fsoc">yt</a>
            </div>
          </div>

          <div className="ft-col">
            <h4>Services</h4>
            <Link href="#services">AI & Neural Engineering</Link>
            <Link href="#services">Enterprise Software</Link>
            <Link href="#services">Cloud & DevOps</Link>
            <Link href="#services">Data Intelligence</Link>
            <Link href="#services">Cybersecurity</Link>
          </div>

          <div className="ft-col">
            <h4>Company</h4>
            <Link href="#about">About Us</Link>
            <Link href="#process">Our Process</Link>
            <Link href="#why">Why SIMFAH</Link>
            <Link href="#testimonials">Case Studies</Link>
            <Link href="#contact">Careers</Link>
          </div>

          <div className="ft-col">
            <h4>Contact</h4>
            <a href="mailto:hello@simfahglobal.com">hello@simfahglobal.com</a>
            <a href="tel:+940770000000">+94 77 000 0000</a>
            <a href="#">Colombo, Sri Lanka</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="ft-bot">
          <div className="ft-copy">© 2025 SIMFAH Global. All rights reserved.</div>
          <div className="ft-tag">Built with <span>■</span> SIMFAH · Ignite. Innovate. Dominate.</div>
        </div>
      </div>
    </footer>
  )
}
