import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends Component {
    render() {
        return (
            
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" >
             <div className = "container">
             <div className="nav-section">
            <Navbar.Brand href="#home">Mandeep Dhillon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#Overview">Overview</Nav.Link>  
                <Nav.Link href="#Resume">Resume</Nav.Link>
                <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </div>
            </div>
            </Navbar>
          

        )
    }
}
// 
