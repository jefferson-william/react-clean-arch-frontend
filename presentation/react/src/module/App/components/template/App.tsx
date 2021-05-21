import React from 'react'
import { hot } from 'react-hot-loader/root'
import history from '@app/shared/lib/history'
import Routers from '~/shared/routers'
import GlobalStyles from '~/shared/styles/global'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Routers history={history} />
  </>
)

export default hot(App)
