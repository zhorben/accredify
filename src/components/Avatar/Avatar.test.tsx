import React from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders with correct src and alt', () => {
    render(<Avatar src="test.jpg" alt="Test Avatar" />)
    const img = screen.getByAltText('Test Avatar')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'test.jpg')
  })

  it('applies correct size class', () => {
    render(<Avatar src="test.jpg" alt="Test Avatar" size="small" />)
    const avatar = screen.getByRole('img').parentElement
    expect(avatar).toHaveClass('w-avatar-sm')
  })
})
