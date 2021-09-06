import React, { Component } from 'react'
import Hero from './Hero'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import '../App.css'
import Portfolio from './Portfolio'
import Services from './Services'
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
    <div className = "App">
      <Router>
      <Navigation />
      <Route path="/" exact><Hero />
      <Services />
      <Skills />
      </Route>
      <Route path="/portfolio"><Portfolio /></Route>
      <Route path="/about"><About />
      </Route>
      <Route path= "/experience"><Resume /></Route>
      <Route path= "/contact"><Contact /></Route>
      <Footer />
      </Router>
            
    </div>  
    )
  }
}
