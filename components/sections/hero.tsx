'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Camera, Sparkles, TrendingUp, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0)

  const miniFeatures = [
    { icon: Camera, label: 'Scan Receipts' },
    { icon: Sparkles, label: 'AI Powered' },
    { icon: TrendingUp, label: 'Track Spending' },
    { icon: Shield, label: 'Secure' },
  ]

  return (
    <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full animate-slide-in-down">
                <Sparkles className="w-4 h-4 text-primary animate-pulse-subtle" />
                <span className="text-sm font-medium text-primary">Best Expense Manager with AI Receipt Scanner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-balance text-foreground leading-[1.1]">
                AI Expense{' '}
                <span className="relative">
                  <span className="text-primary">Notebook</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-foreground/70 text-balance leading-relaxed max-w-lg animate-fade-in-up">
                Track daily expenses, manage budgets, and scan receipts instantly using AI.
              </p>
            </div>

            {/* Interactive mini features */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-100">
              {miniFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveFeature(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-primary text-primary-foreground border-primary scale-105'
                        : 'bg-secondary/50 border-border hover:border-primary/50 text-foreground/70'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{feature.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 hover-lift hover-glow-primary group">
                Download App
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-lg px-8 hover-lift transition-smooth group">
                See Demo
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50 flex gap-10 animate-fade-in-up animate-delay-300">
              {[
                { value: '50K+', label: 'Active Users' },
                { value: '$2B+', label: 'Tracked' },
                { value: '4.8★', label: 'App Rating' },
              ].map((stat, index) => (
                <div key={index} className="group cursor-default">
                  <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - App Screenshots */}
          <div className="relative h-[600px] flex items-center justify-center animate-fade-in-right">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[3rem] blur-3xl animate-pulse-subtle"></div>
              
              {/* Back image - AI Magic Scan (slightly hidden behind) */}
              <div className="absolute top-8 -left-4 lg:left-0 w-56 sm:w-64 transform -rotate-6 opacity-80 hover:opacity-100 hover:-rotate-3 transition-all duration-500 z-10">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322608-kk57fjz4ohUbvApexmnF1jYy5qsKrK.png"
                    alt="AI Magic Scan - Receipt scanning feature"
                    width={384}
                    height={832}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Front image - Analytics Dashboard (on top) */}
              <div className="relative w-56 sm:w-64 ml-auto mr-4 lg:mr-8 transform rotate-3 hover:rotate-0 transition-all duration-500 z-20 hover:scale-105">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20427322551-Q9EgVsjwwGDxSr79MZzm2yxCFJYbnJ.png"
                    alt="Expense Analytics - Track your spending"
                    width={384}
                    height={832}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 lg:-left-16 top-1/4 bg-background border border-border rounded-xl p-3 shadow-lg animate-float z-30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Saved</p>
                    <p className="text-sm font-bold text-green-500">+$340</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 lg:-right-12 bottom-1/4 bg-background border border-border rounded-xl p-3 shadow-lg animate-float z-30" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI Detected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
