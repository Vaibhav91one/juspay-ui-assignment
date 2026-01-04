import { describe, it, expect, vi } from 'vitest'
import { renderWithProviders, screen } from '@/test/test-utils'
import userEvent from '@testing-library/user-event'
import { AppHeader } from './app-header'
import { SidebarProvider } from '@/components/ui/sidebar'

describe('AppHeader', () => {
  it('renders header with breadcrumb navigation', () => {
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    expect(screen.getByRole('banner')).toBeInTheDocument()
    // Breadcrumb might show ellipsis on mobile, so check for breadcrumb nav element
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument()
  })

  it('renders sidebar trigger button', () => {
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    const trigger = screen.getByRole('button', { name: /toggle sidebar/i })
    expect(trigger).toBeInTheDocument()
  })

  it('renders star icon button', () => {
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    const starButton = screen.getByRole('button', { name: /star/i })
    expect(starButton).toBeInTheDocument()
  })

  it('renders search input on desktop', () => {
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    const themeButton = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeButton).toBeInTheDocument()
  })

  it('renders notification button', () => {
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    const notificationButton = screen.getByRole('button', { name: /notifications/i })
    expect(notificationButton).toBeInTheDocument()
  })

  it('opens command dialog when search input is clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={vi.fn()} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.click(searchInput)
    
    expect(screen.getByPlaceholderText(/type a command or search/i)).toBeInTheDocument()
  })

  it('calls onRightSidebarToggle when right sidebar trigger is clicked', async () => {
    const mockToggle = vi.fn()
    const user = userEvent.setup()
    renderWithProviders(
      <SidebarProvider>
        <AppHeader onRightSidebarToggle={mockToggle} />
      </SidebarProvider>,
      { includeSidebar: true }
    )
    
    // Find all buttons and click the right sidebar trigger (usually the last one)
    const buttons = screen.getAllByRole('button')
    const rightSidebarTrigger = buttons[buttons.length - 1]
    
    await user.click(rightSidebarTrigger)
    expect(mockToggle).toHaveBeenCalledTimes(1)
  })
})

