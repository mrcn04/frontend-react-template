import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Home from '../src/pages/Home'

describe('Home', () => {
  it('Renders hello world', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World')
  })
})
