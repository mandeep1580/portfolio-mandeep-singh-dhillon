import React, { Component } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'


export default class Portfolio extends Component {
    render() {
        return (
            
            <div className="container">
            <hr></hr>
            <div className="heading">    
            <h1>Portfolio</h1>
            </div>
                          
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src= "images/parlez.png" />
                    <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="images/tmdb.png"/>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                      
                <Card>
                    <Card.Img variant="top" src="images/walkabooks.png"/>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card bg="success" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                </Card>
                
                <Card>
                    <Card.Img src="images/bc-tourism.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src="images/adventurescapes.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    </Card.Body>
                </Card>
                
                <Card>
                <Card.Img src="images/adventurescapes.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardColumns>
            </div>
                
            
        )
    }
}
