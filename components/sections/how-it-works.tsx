'use client'

import { Camera, CheckCircle2, Tag, BarChart3, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const steps = [
  {
    icon: Camera,
    title: 'Scan Receipt',
    description: 'Point your camera at any receipt. Our AI instantly recognizes and extracts all the key information.',
    details: ['Amount', 'Date', 'Merchant', 'Category'],
  },
  {
    icon: CheckCircle2,
    title: 'Verify Details',
    description: 'Review the extracted information. Make quick edits if needed with our smart suggestion system.',
    details: ['Auto-correct', 'Smart tags', 'One-tap fix'],
  },
  {
    icon: Tag,
    title: 'Organize',
    description: 'Categorize your expense automatically or manually. Add notes, tags, and attach receipts.',
    details: ['Smart categories', 'Custom tags', 'Attach files'],
  },
  {
    icon: BarChart3,
    title: 'Analyze',
    description: 'Get instant insights about your spending patterns with beautiful charts and detailed reports.',
    details: ['Real-time charts', 'Trends', 'Insights'],
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 animate-slide-in-down">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-medium text-primary">Four Simple Steps</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            The Power of Automation in Four Steps
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Experience the fastest way to track your expenses. From scanning to insights, everything works seamlessly.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className="relative">
                  {/* Desktop: Alternating layout */}
                  <div className={`hidden lg:grid grid-cols-2 gap-8 items-center ${isEven ? '' : 'auto-rows-fr'}`}>
                    {isEven ? (
                      <>
                        {/* Left Content */}
                        <div
                          className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
                          style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
                        >
                          <div className="space-y-4 pr-8">
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                  <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step {index + 1}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                            <div className="flex flex-wrap gap-2 pt-4">
                              {step.details.map((detail, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                                >
                                  {detail}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Timeline dot */}
                        <div className="flex justify-center">
                          <div
                            className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary flex items-center justify-center group hover-scale transition-smooth ${
                              isVisible ? 'animate-scale-in' : 'opacity-0'
                            }`}
                            style={{ animationDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}
                          >
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                              <span className="text-lg font-bold group-hover:scale-110 transition-transform">{index + 1}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Timeline dot */}
                        <div className="flex justify-center">
                          <div
                            className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary flex items-center justify-center group hover-scale transition-smooth ${
                              isVisible ? 'animate-scale-in' : 'opacity-0'
                            }`}
                            style={{ animationDelay: isVisible ? `${index * 150 + 100}ms` : '0ms' }}
                          >
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                              <span className="text-lg font-bold group-hover:scale-110 transition-transform">{index + 1}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Content */}
                        <div
                          className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
                          style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
                        >
                          <div className="space-y-4 pl-8">
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Step {index + 1}</span>
                                <div className="p-3 bg-primary/10 rounded-lg">
                                  <Icon className="w-6 h-6 text-primary" />
                                </div>
                              </div>
                              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                            <div className="flex flex-wrap gap-2 pt-4">
                              {step.details.map((detail, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                                >
                                  {detail}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile: Stacked layout */}
                  <div
                    className={`lg:hidden ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                  >
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group hover-scale">
                          {index + 1}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-20 bg-gradient-to-b from-primary/50 to-primary/10 mt-2"></div>
                        )}
                      </div>
                      <div className="pb-8 pt-2">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-foreground/70 text-sm mb-3 leading-relaxed">{step.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {step.details.map((detail, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-20 text-center ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover-lift transition-smooth group flex items-center gap-2">
              Start Tracking
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-smooth">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
