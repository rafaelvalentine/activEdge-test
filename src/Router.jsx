import React from 'react'
import { Switch, Route } from 'react-router-dom'
//Components 
import NotFound from './components/Tools/Error/404error'
// Pages for Container
import Home from './container/Home'

function Router () {
  return (
    <>
      <Switch >  
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default Router
