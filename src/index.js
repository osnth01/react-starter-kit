import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import style from './css/style.css'

import App from './components/App'
import Hello from './components/Hello'
import Goodbye from './components/Goodbye'

const target = document.getElementById('root')

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Hello} />
      <Route path="goodbye" component={Goodbye} />
    </Route>
  </Router>,
  target
)