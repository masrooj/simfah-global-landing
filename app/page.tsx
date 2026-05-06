import type { Metadata } from 'next'

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
"use client"
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Tech from '@/components/Tech'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <About />
      <Tech />
      <Process />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  )
}
