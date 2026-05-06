import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIMFAH Global | AI, Apps & Digital Solutions',
  description: 'Unlock your business growth with SIMFAH Global. We deliver AI, web/mobile apps, ERP, CRM, fintech, real estate, tourism, and more globally.',
  keywords: [
    'AI',
    'web development',
    'mobile apps',
    'ERP',
    'CRM',
    'fintech',
    'real estate',
    'tourism',
    'SIMFAH Global',
    'digital solutions',
  ],
  openGraph: {
    title: 'SIMFAH Global | AI, Apps & Digital Solutions',
    description: 'Unlock your business growth with SIMFAH Global. We deliver AI, web/mobile apps, ERP, CRM, fintech, real estate, tourism, and more globally.',
    url: 'https://simfahglobal.com/',
    siteName: 'SIMFAH Global',
    images: [
      {
        url: '/simfah-logo.png',
        width: 1200,
        height: 630,
        alt: 'SIMFAH Global',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIMFAH Global | AI, Apps & Digital Solutions',
    description: 'Unlock your business growth with SIMFAH Global. We deliver AI, web/mobile apps, ERP, CRM, fintech, real estate, tourism, and more globally.',
    images: ['/simfah-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
