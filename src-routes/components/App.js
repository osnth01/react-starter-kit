import React from 'react'
import { Link } from 'react-router'
import AppStyle from './App.css'

const App = (props) => (
  <div className={AppStyle.app}>
    <ul role="nav">
      <li><Link to="/">Hello</Link></li>
      <li><Link to="/goodbye">GoodBye</Link></li>
    </ul>

    {props.children}
  </div>
)

export default App