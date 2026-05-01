import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIMFAH Global — Future-Ready Software Solutions',
  description: 'Transforming global enterprises through AI-powered architectures, neural-driven platforms, and enterprise software that operates at the speed of tomorrow.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
