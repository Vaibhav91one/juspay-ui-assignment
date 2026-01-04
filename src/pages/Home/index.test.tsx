import { describe, it, expect } from 'vitest'
import { renderWithProviders, screen } from '@/test/test-utils'
import Home from './index'

describe('Home Page', () => {
  it('renders page title', () => {
    renderWithProviders(<Home />)
    
    expect(screen.getByRole('heading', { name: /ecommerce/i })).toBeInTheDocument()
  })

  it('renders metrics cards section', () => {
    renderWithProviders(<Home />)
    
    // Check for metrics cards by looking for common labels
    const hasMetrics = screen.queryByText(/customers/i) || 
                       screen.queryByText(/orders/i) || 
                       screen.queryByText(/revenue/i) ||
                       screen.queryByText(/growth/i)
    expect(hasMetrics).toBeTruthy()
  })

  it('renders revenue by location widget', () => {
    renderWithProviders(<Home />)
    
    expect(screen.getByText(/revenue by location/i)).toBeInTheDocument()
  })

  it('renders top selling products section', () => {
    renderWithProviders(<Home />)
    
    expect(screen.getByText(/top selling products/i)).toBeInTheDocument()
  })

  it('renders total sales section', () => {
    renderWithProviders(<Home />)
    
    expect(screen.getByText(/total sales/i)).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    renderWithProviders(<Home />)
    
    // Check that all major sections are present
    expect(screen.getByText(/revenue by location/i)).toBeInTheDocument()
    expect(screen.getByText(/top selling products/i)).toBeInTheDocument()
    expect(screen.getByText(/total sales/i)).toBeInTheDocument()
  })
})

