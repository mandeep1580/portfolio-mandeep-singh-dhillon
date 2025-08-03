import { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="xxl" className="navbar" variant="light" sticky="top"> 
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Mandeep Singh Dhillon Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="nav-menu">
                            <Nav.Link href="/about">About Me</Nav.Link>
                            {/* <Nav.Link href="/portfolio">Portfolio</Nav.Link> */}
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        )
    }
}
