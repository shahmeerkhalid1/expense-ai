'use client'

import { Camera, TrendingDown, BarChart3, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const highlights = [
  {
    icon: Camera,
    title: 'AI Receipt Scanner',
    description: 'Auto-extract data instantly',
  },
  {
    icon: TrendingDown,
    title: 'Expense & Budget',
    description: 'Track expenses and manage budgets',
  },
  {
    icon: BarChart3,
    title: 'Insights & Reports',
    description: 'View spending patterns and insights',
  },
  {
    icon: Zap,
    title: 'Simple Interface',
    description: 'Clean design with on-screen actions',
  },
]

export default function Highlights() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">Key Features at a Glance</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Everything you need to manage your expenses intelligently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <Card className="p-8 bg-background border-border hover:shadow-lg hover-lift transition-smooth group h-full">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
