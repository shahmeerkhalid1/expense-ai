'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Camera, Sparkles, Receipt, TrendingUp, Shield } from 'lucide-react'

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
                <span className="text-sm font-medium text-primary">AI-Powered Finance</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-balance text-foreground leading-[1.1]">
                Your Money,{' '}
                <span className="relative">
                  <span className="text-primary">Automatically</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
                  </svg>
                </span>{' '}
                Managed
              </h1>
              <p className="text-xl text-foreground/70 text-balance leading-relaxed max-w-lg animate-fade-in-up">
                Scan receipts with AI, track expenses effortlessly, and get actionable insights about where your money goes.
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

          {/* Right - Interactive App Preview */}
          <div className="relative h-[600px] flex items-center justify-center animate-fade-in-right">
            {/* Main phone mockup */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[3rem] blur-2xl animate-pulse-subtle"></div>
              
              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-gradient-to-b from-foreground/10 to-foreground/5 rounded-[3rem] p-2 border border-border/50 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Phone notch */}
                  <div className="flex justify-center pt-2">
                    <div className="w-24 h-6 bg-foreground/10 rounded-full"></div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-foreground/60">Total Balance</p>
                        <p className="text-2xl font-bold text-foreground">$12,450.00</p>
                      </div>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Receipt className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Spending card */}
                    <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-foreground">This Month</span>
                        <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full">-12%</span>
                      </div>
                      <div className="flex gap-1 h-16 items-end">
                        {[40, 65, 45, 80, 55, 70, 50].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary/30 rounded-t transition-all duration-500 hover:bg-primary"
                            style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Recent transactions */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground/60">Recent</p>
                      {[
                        { name: 'Grocery Store', amount: '-$85.20', icon: '🛒' },
                        { name: 'Coffee Shop', amount: '-$4.50', icon: '☕' },
                        { name: 'Salary', amount: '+$3,200', icon: '💰', positive: true },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm font-medium text-foreground">{item.name}</span>
                          </div>
                          <span className={`text-sm font-semibold ${item.positive ? 'text-green-500' : 'text-foreground'}`}>
                            {item.amount}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Scan button */}
                    <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                      <Camera className="w-5 h-5" />
                      Scan Receipt
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-16 top-20 bg-background border border-border rounded-xl p-3 shadow-lg animate-float">
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

              <div className="absolute -right-12 bottom-32 bg-background border border-border rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
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
