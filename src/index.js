import React from 'react'
import { render } from 'react-dom'
import style from './css/style.scss'

import App from './components/App'

const target = document.getElementById('root')

render(
  <App />,
  target
)