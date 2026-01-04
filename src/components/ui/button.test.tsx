import { describe, it, expect, vi } from 'vitest'
import { renderWithProviders, screen } from '@/test/test-utils'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  it('renders button with text', () => {
    renderWithProviders(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    renderWithProviders(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies default variant styles', () => {
    renderWithProviders(<Button>Default Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'default')
  })

  it('applies ghost variant', () => {
    renderWithProviders(<Button variant="ghost">Ghost Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'ghost')
  })

  it('applies outline variant', () => {
    renderWithProviders(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'outline')
  })

  it('applies size variants', () => {
    renderWithProviders(<Button size="sm">Small Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-size', 'sm')
  })

  it('is disabled when disabled prop is true', () => {
    renderWithProviders(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    renderWithProviders(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    )
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})

