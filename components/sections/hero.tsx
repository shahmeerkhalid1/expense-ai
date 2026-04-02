'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full animate-slide-in-down">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle"></span>
                <span className="text-sm font-medium text-foreground/70">AI-Powered Finance</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
                Your Money, <span className="text-primary animate-fade-in">Automatically Managed</span>
              </h1>
              <p className="text-xl text-foreground/70 text-balance leading-relaxed max-w-lg animate-fade-in-up animate-delay-100">
                Scan receipts with AI, track expenses effortlessly, and get actionable insights about where your money goes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 hover-lift hover-glow-primary group">
                Download App
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-lg px-8 hover-lift transition-smooth">
                See Demo
              </Button>
            </div>

            <div className="pt-8 border-t border-border flex gap-8 animate-fade-in-up animate-delay-300">
              <div className="hover-scale">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-foreground/60">Active Users</p>
              </div>
              <div className="hover-scale">
                <p className="text-2xl font-bold text-primary">$2B+</p>
                <p className="text-sm text-foreground/60">Tracked Expenses</p>
              </div>
              <div className="hover-scale">
                <p className="text-2xl font-bold text-primary">4.8★</p>
                <p className="text-sm text-foreground/60">App Rating</p>
              </div>
            </div>
          </div>

          {/* Right - App Screenshots */}
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center gap-4">
              {/* iOS Screenshot */}
              <div className="relative w-48 h-full animate-fade-in-right animate-delay-200">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl blur-2xl animate-float"></div>
                <div className="relative bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl border border-primary/20 h-full flex items-center justify-center overflow-hidden hover-lift hover-glow-primary transition-smooth">
                  <div className="w-full h-full bg-gradient-to-b from-background via-card to-background flex flex-col items-center justify-between p-6">
                    <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-3xl animate-scale-in animate-delay-300">$</div>
                    <div className="space-y-2 w-full">
                      <div className="h-3 bg-primary/30 rounded w-full animate-slide-in-up animate-delay-400"></div>
                      <div className="h-3 bg-primary/20 rounded w-4/5 animate-slide-in-up animate-delay-500"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-foreground/60 mt-2">iOS</p>
              </div>

              {/* Android Screenshot */}
              <div className="relative w-48 h-5/6 -mt-12 animate-fade-in-right animate-delay-300">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="relative bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl border border-primary/20 h-full flex items-center justify-center overflow-hidden hover-lift hover-glow-primary transition-smooth">
                  <div className="w-full h-full bg-gradient-to-b from-background via-card to-background flex flex-col items-center justify-between p-6">
                    <div className="w-32 h-32 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-3xl animate-scale-in animate-delay-400">AI</div>
                    <div className="space-y-2 w-full">
                      <div className="h-3 bg-primary/30 rounded w-full animate-slide-in-up animate-delay-500"></div>
                      <div className="h-3 bg-primary/20 rounded w-4/5 animate-slide-in-up animate-delay-600"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-foreground/60 mt-2">Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
