import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import IndexView from './views/home'

export const RoutesMain = () => (
  <Switch>
    <Route exact path="/" component={IndexView} />
    <Redirect from="*" to="/404" />
  </Switch>
)