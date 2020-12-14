import React, { Component } from 'react'
import Banner from './Banner'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from './Overview';
import Profile from './Profile';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';



export default class App extends Component {
  render() {
    return (
      <div className = "App">
      <Navigation />
      <Banner />
      <Overview />
      <Profile />
      <Skills />
      <Resume />
      <Contact />
           
        
      </div>  
    )
  }
}
