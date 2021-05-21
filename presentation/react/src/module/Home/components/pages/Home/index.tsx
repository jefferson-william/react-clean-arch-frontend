import React from 'react'
import { Typography } from '@material-ui/core'
import { ReactComponent as Logo } from '~/shared/assets/images/logo.svg'
import { Main } from './styles'

const Component: React.FC = () => (
  <Main className="main">
    <div className="main__body">
      <header className="main__header">
        <Logo data-testid="logo" className="main__logo" />
      </header>
      <main>
        <Typography variant="h4">
          Hello world! <i className="fa fa-arrow-left" />
        </Typography>
      </main>
    </div>
  </Main>
)

export default Component
