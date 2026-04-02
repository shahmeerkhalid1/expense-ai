'use client'

import { Button } from '@/components/ui/button'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Blog'],
    Company: ['About', 'Careers', 'Contact', 'Press'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'License'],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="font-bold text-lg text-foreground">AI Expense</span>
            </div>
            <p className="text-sm text-foreground/60">
              Smart expense tracking powered by AI.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} AI Expense Notebook. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground/60 hover:text-foreground" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground/60 hover:text-foreground" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground/60 hover:text-foreground" />
            </a>
            <a
              href="mailto:hello@aiexpense.com"
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground/60 hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
