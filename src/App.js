import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import TwoPac from './components/TwoPac'
import Biggie from './components/Biggie'
import Metallica from './components/Metallica'

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/2Pac">2Pac</Link>
                <Link to="/Biggie">Biggie</Link>
                <Link to="/Metallica">Metallica</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/2Pac" component={TwoPac}></Route>
          <Route exact path="/Biggie" component={Biggie}></Route>
          <Route exact path="/Metallica" component={Metallica}></Route>

        </Switch>
      </Router>
    )
  }
}

export default App
