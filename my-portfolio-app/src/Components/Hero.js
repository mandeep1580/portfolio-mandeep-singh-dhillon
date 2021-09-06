import React, { Component } from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Link from 'react-bootstrap/NavLink';
import Overview from './About';


export default class Hero extends Component {
    render() {
        return (       
        <div className="content-container">      
            <div className="big-image">   
                <div className= "overlay">
                    <aside className = "hero-content">
                        <div className= "logo">
                            <img src="images/logo.png" alt="logo"/>
                        </div>
                        <div className = "hero-text">
                            <h1>I am Mandeep Dhillon</h1>
                            <div className = "social">
                                <Link 
                                    href="https://www.linkedin.com/in/mandeep-singh-dhillon/"><AiOutlineLinkedin/>
                                </Link>
                                <Link 
                                    href="https://github.com/mandeep1580"><AiOutlineGithub/>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
       
        </div>        
        )
    }
}


