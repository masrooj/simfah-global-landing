
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
