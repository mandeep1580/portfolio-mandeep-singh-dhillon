import React, { Component } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Link from "react-bootstrap/NavLink"


export default class Portfolio extends Component {
    render() {
        return (
            
            <div className="container">
            <div className="heading">    
            <h1>Portfolio</h1>
            <hr></hr>
            </div>
            <div className="portfolio">              
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src= "images/parlez.png" />
                    <Card.Body>
                    <Link href="https://parlezz.netlify.app">
                    <Card.Title>Parlez</Card.Title>
                    </Link>
                    <Card.Text>
                        A chat room app made with <strong>React and DotNet</strong>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="images/tmdb.png"/>
                    <Card.Body>
                    <Link href="">
                    <Card.Title>The Movie App</Card.Title>
                    </Link>
                    <Card.Text>
                        An api based movie app made with <strong>React</strong>
                    </Card.Text>
                    </Card.Body>
                </Card>
                      
                <Card>
                    <Card.Img variant="top" src="images/walkabooks.png"/>
                    <Card.Body>
                    <Link href="https://walkabooks.netlify.app">
                    <Card.Title>Walkabooks</Card.Title>
                    </Link>
                    <Card.Text>
                        An ecommerce app made with <strong>Angular</strong>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card bg="success" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Intellectual growth should commence at birth and cease only at death.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Albert Einstine
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                
                <Card>
                    <Card.Img src="images/bc-tourism.png" />
                    <Card.Body>
                    <Link href="https://bc-tourism.netlify.app">
                    <Card.Title>BC Tourism</Card.Title>
                    </Link>
                    <Card.Text>
                        An information app made with <strong>HTML and CSS</strong>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Img src="images/adventurescapes.png" />
                    <Card.Body>
                    <Link href="https://adventurescapes.netlify.app/">
                    <Card.Title>Adventure Escapes</Card.Title>
                    </Link>
                    <Card.Text>
                        An adventure tourism app
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardColumns>
            </div>
            </div>
            
        )
    }
}
