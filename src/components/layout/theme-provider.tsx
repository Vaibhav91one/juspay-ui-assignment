import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/redux'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme.theme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  // Apply theme immediately on mount to prevent flash
  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      root.classList.add('dark')
    } else if (stored === 'light') {
      root.classList.remove('dark')
    } else {
      // Use system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [])

  return <>{children}</>
}

