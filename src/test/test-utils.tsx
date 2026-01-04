import React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/store/themeSlice'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { SidebarProvider } from '@/components/ui/sidebar'

// Create a test store
function createTestStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
    preloadedState,
  })
}

// Custom render function that includes providers
function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
    includeSidebar = false,
    ...renderOptions
  }: RenderOptions & { 
    preloadedState?: any
    store?: ReturnType<typeof createTestStore>
    includeSidebar?: boolean
  } = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    const content = includeSidebar ? (
      <SidebarProvider>{children}</SidebarProvider>
    ) : children

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider>
            {content}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
export { renderWithProviders, createTestStore }

