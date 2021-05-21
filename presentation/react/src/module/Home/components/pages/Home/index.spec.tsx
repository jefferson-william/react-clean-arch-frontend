import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import Routers from '~/shared/routers'

describe('pages/', () => {
  it('render page', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
    })

    const { findByTestId } = render(
      <MemoryRouter>
        <Routers history={history} />
      </MemoryRouter>
    )

    const logo = await findByTestId('logo')

    expect(logo).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')
  })
})
