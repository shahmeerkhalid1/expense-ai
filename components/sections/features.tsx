'use client'

import { Camera, Zap, PieChart, Tags, BarChart3, Check, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const features = [
  {
    icon: Zap,
    title: 'Smart Expense Tracking',
    description: 'Track your daily spending with a powerful and easy-to-use expense manager built for accuracy and speed.',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: PieChart,
    title: 'Budget Management',
    description: 'Set budgets and monitor your finances with one of the best budget tracking tools available in a modern expense app.',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Tags,
    title: 'Auto Categorization',
    description: 'Organize expenses into categories, making it easier to understand where your money goes.',
    accent: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    icon: BarChart3,
    title: 'Insights & Reports',
    description: 'Get a clear overview of your spending patterns.',
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
]

export default function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 animate-slide-in-down">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need for Smart Expense Management
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Advanced AI meets simplicity. Track, categorize, and understand your finances effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {/* Large Featured Card - AI Receipt Scanner */}
          <div
            className={`md:col-span-2 lg:col-span-2 lg:row-span-2 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
          >
            <div className="relative h-full rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-sm overflow-hidden group hover-lift transition-smooth hover:border-primary/50">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative p-8 md:p-10 h-full flex flex-col lg:flex-row gap-8">
                {/* Left side - Text content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Camera className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground text-2xl md:text-3xl mb-4">
                    AI Receipt Scanner
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                    One of the best receipt scanner features in any expense tracker—simply scan and let AI extract amount, date, and category instantly.
                  </p>
                  <div className="space-y-3">
                    {['99.2% accuracy rate', 'Instant data extraction', 'Multi-currency support'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Visual mockup */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    {/* Receipt mockup */}
                    <div className="bg-background rounded-xl border border-border p-5 shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-foreground/50">RECEIPT</span>
                          <Sparkles className="w-4 h-4 text-primary animate-pulse-subtle" />
                        </div>
                        <div className="h-px bg-border"></div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/70">Coffee Shop</span>
                            <span className="text-foreground font-medium">$4.50</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/70">Grocery Store</span>
                            <span className="text-foreground font-medium">$85.20</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/70">Gas Station</span>
                            <span className="text-foreground font-medium">$45.00</span>
                          </div>
                        </div>
                        <div className="h-px bg-border"></div>
                        <div className="flex justify-between text-sm font-semibold">
                          <span className="text-foreground">Total</span>
                          <span className="text-primary">$134.70</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating AI badge */}
                    <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg animate-float">
                      <Sparkles className="w-3 h-3" />
                      AI Detected
                    </div>

                    {/* Mini chart */}
                    <div className="absolute -bottom-4 -left-4 bg-background rounded-lg border border-border p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                      <div className="flex gap-1 h-10 items-end">
                        {[40, 65, 45, 80, 55, 70].map((height, i) => (
                          <div
                            key={i}
                            className="w-2 bg-primary/30 rounded-t hover:bg-primary transition-colors"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Other feature cards */}
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${(index + 1) * 75}ms` : '0ms' }}
              >
                <div className="relative h-full rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-sm overflow-hidden group hover-lift transition-smooth hover:border-primary/50">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    {/* Icon Background */}
                    <div className="mb-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-foreground text-lg md:text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}
        >
          <p className="text-foreground/60 mb-6">Ready to transform your expense tracking?</p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover-lift transition-smooth group inline-flex items-center gap-2">
            Get Started Free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
