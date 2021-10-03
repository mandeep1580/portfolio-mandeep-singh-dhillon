import React, { Component } from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Link from 'react-bootstrap/NavLink';
import { Row } from 'react-bootstrap';
import Services from './Services'
import Skills from './Skills'


export default class Hero extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="big-image">
                    <div className="overlay">
                        <Row className="hero-content ">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <img className="logo" src="images/logo.png" alt="logo" />
                                <h1>Mandeep Dhillon</h1>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <Link className="social"
                                    href="https://www.linkedin.com/in/mandeep-singh-dhillon/"><AiOutlineLinkedin />
                                </Link>
                                <Link className="social"
                                    href="https://github.com/mandeep1580"><AiOutlineGithub />
                                </Link>
                            </div>
                        </Row>
                    </div>
                </div>
                <Services />
                <Skills />
            </div>
        )
    }
}


