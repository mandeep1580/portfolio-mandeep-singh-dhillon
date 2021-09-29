import React, { Component } from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Link from 'react-bootstrap/NavLink'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer" fixed="bottom">
                <Link href="https://www.linkedin.com/in/mandeep-singh-dhillon/" className="social"><AiOutlineLinkedin />
                </Link>
                <Link href="https://github.com/mandeep1580" className="social" ><AiOutlineGithub /> </Link>

                <div className="footer-info">
                    <i>+778-814-3204</i>
                    <br></br>
                    <a href="mailto:mandeep15@gmail.com">mandeep15@gmail.com</a>
                    <br></br>
                    <i>7180, 11th Avenue, Burnaby, Vancouver, BC</i>
                </div>
                <p className="copyright text-muted"> &copy; 2020 Mandeep Dhillon </p>
            </footer>
        )
    }
}