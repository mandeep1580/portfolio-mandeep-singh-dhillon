import React, { Component } from 'react'
import Hero from './Hero'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './Overview';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import '../App.css';



export default class App extends Component {
  render() {
    return (
      <div className = "App">
      <Navigation />
      <Hero />
      <Overview />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
           
        
      </div>  
    )
  }
}
