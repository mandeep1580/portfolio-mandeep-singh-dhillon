import { Component } from 'react'
// import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
// import Link from 'react-bootstrap/NavLink';
// import { Row } from 'react-bootstrap';
import Services from './Services'
import Skills from './Skills'


export default class Hero extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="big-image">
                    <div className="overlay">
                </div>
                <Services />
                <Skills />
                </div>
            </div>
        )
    }
}


