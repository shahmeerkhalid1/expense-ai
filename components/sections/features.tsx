'use client'

import { Camera, Zap, PieChart, Tags, BarChart3 } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const features = [
  {
    icon: Camera,
    title: 'AI Receipt Scanner',
    description: 'One of the best receipt scanner features in any expense tracker—simply scan and let AI extract amount, date, and category instantly.',
    accent: 'from-blue-500/20 to-cyan-500/20',
    size: 'lg',
  },
  {
    icon: Zap,
    title: 'Smart Expense Tracking',
    description: 'Track your daily spending with a powerful and easy-to-use expense manager built for accuracy and speed.',
    accent: 'from-amber-500/20 to-orange-500/20',
    size: 'md',
  },
  {
    icon: PieChart,
    title: 'Budget Management',
    description: 'Set budgets and monitor your finances with one of the best budget tracking tools available in a modern expense app.',
    accent: 'from-emerald-500/20 to-teal-500/20',
    size: 'md',
  },
  {
    icon: Tags,
    title: 'Auto Categorization',
    description: 'Organize expenses into categories, making it easier to understand where your money goes.',
    accent: 'from-purple-500/20 to-indigo-500/20',
    size: 'md',
  },
  {
    icon: BarChart3,
    title: 'Insights & Reports',
    description: 'Get a clear overview of your spending patterns.',
    accent: 'from-cyan-500/20 to-blue-500/20',
    size: 'md',
  },
]

export default function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="features" className="py-20 px-4 sm:px-6 lg:px-8 ">
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
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isLarge = feature.size === 'lg'

            return (
              <div
                key={index}
                className={`${isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                  } ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 75}ms` : '0ms' }}
              >
                <div
                  className={`relative h-full rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-sm overflow-hidden group hover-lift transition-smooth hover:border-primary/50`}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className={`relative ${isLarge ? 'p-8 md:p-12' : 'p-6 md:p-8'}`}>
                    {/* Icon Background */}
                    <div className={`mb-6 ${isLarge ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300`}>
                      <Icon
                        className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} text-primary group-hover:text-primary/80 transition-colors`}
                      />
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3">
                      <h3 className={`font-bold text-foreground ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-foreground/70 leading-relaxed ${isLarge ? 'text-lg' : 'text-sm md:text-base'}`}>
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
