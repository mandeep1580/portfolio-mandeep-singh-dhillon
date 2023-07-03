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
                    <br></br>
                    <br></br>
                    </div>
                <p className="copyright text-muted"> &copy; 2020 Mandeep Dhillon </p>
            </footer>
        )
    }
}
