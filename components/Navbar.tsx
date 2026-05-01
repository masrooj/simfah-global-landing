'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  useEffect(() => {
    const nav = document.getElementById('navbar')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="navbar">
      <Link href="#" className="nav-logo">
        <div className="nav-logo-img">
          <div className="nav-logo-glow" />
          <img src="/simfah-logo.png" alt="SIMFAH Global"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/48x48/FF6D00/FF6D00?text=S' }} />
        </div>
        <div className="nav-brand">
          <div className="nav-brand-main">SIMFAH<span> GLOBAL</span></div>
          <div className="nav-brand-sub">Ignite Your Digital Future</div>
        </div>
      </Link>

      <div className="nav-links">
        <Link href="#services">Services</Link>
        <Link href="#about">About</Link>
        <Link href="#process">Process</Link>
        <Link href="#why">Why Us</Link>
        <Link href="#contact">Contact</Link>
      </div>

      <Link href="#contact" className="nav-cta">Start Project</Link>
    </nav>
  )
}
