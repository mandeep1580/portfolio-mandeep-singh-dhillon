import React, { Component } from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from 'react-bootstrap/NavLink'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <footer className="section-footer mt-5">
            <Link href="https://www.linkedin.com/in/mandeep-singh-dhillon/"
                        className= "social"><AiOutlineLinkedin/>
                        </Link>
                <section class="footer-bottom border-top row">
                    <div class="col-md-2">
                        <p class="text-muted"> &copy; 2020 Mandeep Dhillon </p>
                    </div>
                    <div class="col-md-8 text-md-center">
                        <span class="px-2">mandeep15@gmail.com</span>
                        <span class="px-2">+778-814-3204</span>
                        <span class="px-2">7180, 11th Avenue, Burnaby, Vancouver, BC</span>
                    </div>
                 </section>
            </footer>
        </div>
        )
    }
}