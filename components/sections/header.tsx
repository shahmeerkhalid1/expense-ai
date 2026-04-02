'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 hover-scale">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform hover:glow-primary">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground">AI Expense Notebook</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium animate-fade-in-down"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-secondary rounded-lg transition-colors hover-scale"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors hover-scale"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>

            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 hover-lift group">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border animate-slide-in-down">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className={`block w-full text-left px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-colors text-sm font-medium animate-slide-in-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 animate-slide-in-up" style={{ animationDelay: '150ms' }}>
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
