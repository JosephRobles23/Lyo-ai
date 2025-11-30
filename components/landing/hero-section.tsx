"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InboxMockup } from "@/components/inbox-mockup"
import { useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations()
  const [waitlistCount, setWaitlistCount] = useState(12773)

  useEffect(() => {
    // Animate count on load
    const interval = setInterval(() => {
      setWaitlistCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-gray-900 dark:text-white">{t('landing.hero.title')}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              {t('landing.hero.subtitle')}
            </p>
          </div>

          {/* Right content - Inbox Mockup */}
          <div className="relative">
            <InboxMockup />
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('landing.hero.waitlist')} <span className="text-orange-500 dark:text-orange-400 font-semibold">{waitlistCount.toLocaleString()}</span> {t('landing.hero.waitlistOthers')}
          </p>
          <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-full px-8 py-6 text-base">
            {t('landing.hero.joinNow')} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
