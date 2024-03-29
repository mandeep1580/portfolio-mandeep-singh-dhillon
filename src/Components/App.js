import React, { Component } from 'react'
import Hero from './Hero'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './About'
import Footer from './Footer'
import '../App.css'
import Portfolio from './Portfolio'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Contact } from './Contact'
import Experience from './Experience'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/experience"><Experience /></Route>
          <Route path="/contact"><Contact /></Route>
          <Footer />
        </Router>

      </div>
    )
  }
}
