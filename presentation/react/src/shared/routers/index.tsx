import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from '~/module/Home/components/pages/Home'
import { Props } from './index.d'

const Routers: React.FC<Props> = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </Router>
)

export default Routers
