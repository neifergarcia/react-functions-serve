import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './views'
import Error404 from './views/404'

const App = () => (
  <Switch>
    <Route exact path="/404" component={Error404} />
    <Route path="/" component={Main} />
  </Switch>
)
export default App