import React, { Component } from 'react';
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Link from "react-bootstrap/NavLink";
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'


export default class Websites extends Component {
    render() {
        return (
            <Card className="websites col-lg-3 col-md-6 col-sm-12">
                <img className= "proj-image " src={this.props.img} alt="" />
                <h5 className="text-muted mt-3">{this.props.name}</h5>
                <p className="text muted mt-1">{this.props.tech}</p>
                <Row className="button-card ">
                    <Link href={this.props.website}>
                        <Button variant="success"> <AiOutlineLink /> Visit Site</Button>
                    </Link>
                    <Link href={this.props.github}>
                        <Button variant="dark"> <AiOutlineGithub /> Github</Button>
                    </Link>
                </Row>
            </Card>
        )
    }
}
