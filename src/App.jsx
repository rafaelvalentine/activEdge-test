import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Error from './components/Tools/Error/errorHandling'
import Routes from './Router'

export default () => {
  return (
    <Router>
      <Error>
        <Routes />
      </Error>
    </Router>
  )
}
