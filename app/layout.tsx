import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://simfahglobal.com'),
  title: 'Simfah Global | Ignite your global solution',
  description:
    'Simfah Global delivers AI-powered software engineering, cloud transformation, and digital products for ambitious companies scaling worldwide.',
  keywords: [
    'Simfah Global',
    'software company',
    'AI development',
    'enterprise software',
    'cloud transformation',
    'web and mobile development',
  ],
  openGraph: {
    title: 'Simfah Global | Ignite your global solution',
    description:
      'Launch and scale with Simfah Global: AI-native engineering, secure cloud platforms, and global product delivery.',
    url: 'https://simfahglobal.com',
    siteName: 'Simfah Global',
    images: [
      {
        url: '/simfah-logo.png',
        width: 1200,
        height: 630,
        alt: 'Simfah Global',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simfah Global | Ignite your global solution',
    description:
      'AI-powered software products, enterprise systems, and cloud transformation for global businesses.',
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
