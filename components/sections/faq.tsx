'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const faqs = [
  {
    question: 'How accurate is the AI receipt scanner?',
    answer:
      'Our AI receipt scanner has a 99.2% accuracy rate for extracting key information like amount, date, and merchant name. It continuously learns from user feedback to improve accuracy.',
  },
  {
    question: 'Is my financial data secure?',
    answer:
      'Yes, absolutely. All data is encrypted end-to-end using industry-standard encryption. We never store your personal information and comply with GDPR and other privacy regulations.',
  },
  {
    question: 'Can I use AI Expense Notebook offline?',
    answer:
      'Yes, you can add expenses offline, and they will automatically sync when you reconnect to the internet. All your data is stored locally on your device first.',
  },
  {
    question: 'Does it support multiple currencies?',
    answer:
      'Yes, AI Expense Notebook supports over 150 currencies with real-time exchange rates. You can track expenses in different currencies and see your total spending in your home currency.',
  },
  {
    question: 'Can I export my expense data?',
    answer:
      'Yes, you can export your expense data in multiple formats including CSV, PDF, and Excel. You have full control over your data and can download it anytime.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes, we offer a 30-day free trial with full access to all features. No credit card required to get started.',
  },
]

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-foreground/60">
            Find answers to common questions about AI Expense Notebook
          </p>
        </div>

        <div className={`${isVisible ? 'animate-slide-in-up animate-delay-100' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border hover:bg-background/50 transition-smooth rounded-lg px-4 mb-2"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className={`mt-12 p-8 rounded-lg bg-primary/10 border border-primary/20 text-center hover-lift transition-smooth ${
          isVisible ? 'animate-slide-in-up animate-delay-200' : 'opacity-0'
        }`}>
          <p className="text-foreground/80 mb-4">Still have questions?</p>
          <p className="text-sm text-foreground/60">
            Contact our support team at{' '}
            <a href="mailto:support@aiexpense.com" className="text-primary hover:underline font-semibold">
              support@aiexpense.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
