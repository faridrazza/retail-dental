'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Language context (EN/AR) with persistence and RTL dir handling
export type Language = 'en' | 'ar'

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] = React.useState<Language>('en')

  React.useEffect(() => {
    const saved = (typeof window !== 'undefined'
      ? (localStorage.getItem('lang') as Language | null)
      : null) || null
    if (saved === 'ar' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', language)
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = language
    }
  }, [language])

  const setLanguage = (lang: Language) => setLanguageState(lang)
  const toggleLanguage = () =>
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'))

  const value = React.useMemo(
    () => ({ language, toggleLanguage, setLanguage }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
