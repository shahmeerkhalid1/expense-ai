'use client'

import { CheckCircle2 } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const whyChoosePoints = [
  'AI-powered receipt scanning for instant data extraction',
  'Smart categorization that learns from your spending',
  'Real-time budget alerts and spending insights',
  'Multi-currency support for global users',
  'Privacy-first design with encrypted data',
  'Beautiful, intuitive interface',
]

const useCases = [
  'Daily expense tracking',
  'Budget planning',
  'Students managing spending',
  'Freelancers tracking business expenses',
  'Small business expense tracking',
  'Anyone looking for a top-rated personal finance app',
]

export default function WhyChoose() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 animate-slide-in-down">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Why AI Expense Notebook is the Best Choice
            </h2>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Unlike traditional expense trackers, AI Expense Notebook combines automation and intelligence to deliver a faster and more accurate way to manage money. Its AI-powered receipt scanning and smart categorization make it a best expense app for users who want efficiency without complexity.
            </p>

            <div className="space-y-3">
              {whyChoosePoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-start ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Use Cases Grid */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8">Perfect For:</h3>
              <div className="grid grid-cols-1 gap-3">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-lg bg-background/60 hover:bg-background hover-scale transition-smooth ${
                      isVisible ? 'animate-slide-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: isVisible ? `${index * 60}ms` : '0ms' }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground text-sm font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
