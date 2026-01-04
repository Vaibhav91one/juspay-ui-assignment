import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { LocationDot } from './location-dot'

describe('LocationDot', () => {
  it('renders with correct position', () => {
    const { container } = render(
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <LocationDot x={50} y={50} />
      </div>
    )
    
    const dot = container.querySelector('.absolute')
    expect(dot).toBeInTheDocument()
    expect(dot).toHaveStyle({ left: '50%', top: '50%' })
  })

  it('applies correct positioning styles', () => {
    const { container } = render(
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <LocationDot x={30} y={20} />
      </div>
    )
    
    const dot = container.querySelector('.absolute')
    expect(dot).toHaveStyle({
      left: '30%',
      top: '20%',
      transform: 'translate(-50%, -50%)',
    })
  })

  it('has correct classes for styling', () => {
    const { container } = render(
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <LocationDot x={0} y={0} />
      </div>
    )
    
    const dot = container.querySelector('.absolute')
    expect(dot).toHaveClass('absolute', 'w-[6px]', 'h-[6px]', 'rounded-full')
  })
})

