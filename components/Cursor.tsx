'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')
    if (!cur || !ring) return

    const onMove = (e: MouseEvent) => {
      cur.style.left = e.clientX + 'px'
      cur.style.top = e.clientY + 'px'
      ring.style.left = e.clientX + 'px'
      ring.style.top = e.clientY + 'px'
    }

    const onEnter = () => {
      cur.style.width = '16px'
      cur.style.height = '16px'
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = 'rgba(255,109,0,0.9)'
    }

    const onLeave = () => {
      cur.style.width = '8px'
      cur.style.height = '8px'
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(255,109,0,0.55)'
    }

    document.addEventListener('mousemove', onMove)
    const targets = document.querySelectorAll('a,button,.srv,.wcard,.titem')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cur" />
      <div id="cur-ring" />
    </>
  )
}
