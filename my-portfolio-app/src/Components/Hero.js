import React, { Component } from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from 'react-bootstrap/NavLink'


export default class Hero extends Component {
    render() {
        return (
                    
              <div className="big-image">
                   
                  <div className= "overlay">
                    <div className= "logo">
                        <img src="images/logo.png" alt="logo"/>
                        
                    <div className = "hero-text">
                        <h1>I am Mandeep Dhillon</h1>
                        <h3>Adventurer, Entreprenuer, Consultant and Web Developer</h3></div>
                        <Link href="https://www.linkedin.com/in/mandeep-singh-dhillon/"
                        className= "social"><AiOutlineLinkedin/>
                        </Link>
                    </div>
                    
                    </div> 
              </div>                
            
                
                )
    }
}



