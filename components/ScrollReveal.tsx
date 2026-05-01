'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-l, .reveal-r')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
