import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends Component {
    render() {
        return (
            
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Navbar.Brand href="/">Mandeep Dhillon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href= "/about">About Me</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>  
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
          

        )
    }
}