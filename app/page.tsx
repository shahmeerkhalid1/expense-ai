'use client'

import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import Highlights from '@/components/sections/highlights'
import Features from '@/components/sections/features'
import HowItWorks from '@/components/sections/how-it-works'
import WhyChoose from '@/components/sections/why-choose'
import FAQ from '@/components/sections/faq'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Highlights />
      <Features />
      <HowItWorks />
      <WhyChoose />
      <FAQ />
      <Footer />
    </main>
  )
}
