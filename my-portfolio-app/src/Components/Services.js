import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5"
import Link from "react-bootstrap/NavLink"

export default class services extends Component {
    render() {
        return (
            <div className="container">
                <div className="services">
                    <    CardGroup>
                        <Card
                            bg='info'>
                            <div className= "icon"><AiOutlineFundProjectionScreen /></div>
                            <Card.Body>
                                <Card.Title>Project Management</Card.Title>
                                <Card.Text>
                                Leadership qualities and meticulous planning in starting new projects with proven track record.
                        </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            bg='danger'>
                            <div className= "icon"><BsCodeSlash /></div>
                            <Card.Body>
                                <Card.Title>Web Development</Card.Title>
                                <Card.Text>
                                    Domain expertise in Full Stack Development with a strong foundation in multiple emerging web and mobile application.
                        </Card.Text>

                            </Card.Body>
                        </Card>

                        <Card 
                        bg='primary'>
                            <div className= "icon"><IoPeopleSharp /></div>
                            <Card.Body>
                                <Card.Title>Organisational Behaviour</Card.Title>
                                <Card.Text>
                                Insight into strategies cultivating and strengthening group performance, resource management and organizational dynamics.
                        </Card.Text>

                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div className="button">
                <Link href="/resume">
                                             
                    <Button variant="success" style={{ justifyContent: "centered" }}>Learn More</Button>
                
                </Link></div>
            </div>
        )
    }
}
