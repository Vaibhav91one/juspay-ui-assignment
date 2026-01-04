import { describe, it, expect, beforeEach, vi } from 'vitest'
import themeReducer, { toggleTheme, setTheme } from './themeSlice'

describe('themeSlice', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Mock window.matchMedia to return false (light mode)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('should have initial theme as light when no preference', () => {
    const initialState = themeReducer(undefined, { type: 'unknown' })
    expect(initialState.theme).toBe('light')
  })

  it('should toggle theme from light to dark', () => {
    const initialState = { theme: 'light' as const }
    const action = toggleTheme()
    const state = themeReducer(initialState, action)
    
    expect(state.theme).toBe('dark')
  })

  it('should toggle theme from dark to light', () => {
    const initialState = { theme: 'dark' as const }
    const action = toggleTheme()
    const state = themeReducer(initialState, action)
    
    expect(state.theme).toBe('light')
  })

  it('should set theme to light', () => {
    const initialState = { theme: 'dark' as const }
    const action = setTheme('light')
    const state = themeReducer(initialState, action)
    
    expect(state.theme).toBe('light')
  })

  it('should set theme to dark', () => {
    const initialState = { theme: 'light' as const }
    const action = setTheme('dark')
    const state = themeReducer(initialState, action)
    
    expect(state.theme).toBe('dark')
  })
})

