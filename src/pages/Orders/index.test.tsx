import { describe, it, expect } from 'vitest'
import { renderWithProviders, screen } from '@/test/test-utils'
import Orders from './index'

describe('Orders Page', () => {
  it('renders page title', () => {
    renderWithProviders(<Orders />)
    
    expect(screen.getByRole('heading', { name: /order list/i })).toBeInTheDocument()
  })

  it('renders orders toolbar', () => {
    renderWithProviders(<Orders />)
    
    // Check for search input or filter buttons in toolbar
    const searchInput = screen.queryByPlaceholderText(/search/i)
    const hasToolbar = searchInput || screen.queryByRole('button', { name: /filter/i }) || 
                       screen.queryByRole('button', { name: /sort/i })
    expect(hasToolbar).toBeTruthy()
  })

  it('renders orders table', () => {
    renderWithProviders(<Orders />)
    
    // Check for table headers
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })

  it('renders pagination controls', () => {
    renderWithProviders(<Orders />)
    
    // Check for pagination navigation
    const pagination = screen.getByRole('navigation', { name: /pagination/i })
    expect(pagination).toBeInTheDocument()
  })

  it('displays order data in table', () => {
    renderWithProviders(<Orders />)
    
    // The table should render with data from the data.ts file
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
    
    // Check for table headers using queryByText (more flexible)
    // Headers might be in table headers
    const tableHeaders = table.querySelectorAll('th')
    expect(tableHeaders.length).toBeGreaterThan(0)
    
    // Verify table has data rows
    const tableRows = table.querySelectorAll('tbody tr')
    expect(tableRows.length).toBeGreaterThan(0)
  })

  it('renders table rows with order data', () => {
    renderWithProviders(<Orders />)
    
    // Check if table body has rows (data from data.ts)
    const table = screen.getByRole('table')
    const tbody = table.querySelector('tbody')
    expect(tbody).toBeInTheDocument()
  })
})

