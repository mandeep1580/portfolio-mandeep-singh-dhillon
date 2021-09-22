import React, { Component } from 'react';
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Link from "react-bootstrap/NavLink";
import { Row } from 'react-bootstrap';


export default class Websites extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img} alt="" />

                <h5 className="text-muted mt-3">{this.props.name}</h5>
                <p className="text-muted mt-1">{this.props.tech}</p>
                <Row className="button-card ">
                    <Link href={this.props.website}>
                        <Button variant="success"> <AiOutlineLink /> Visit Site</Button>
                    </Link>
                    <Link href={this.props.github}>
                        <Button variant="dark"> <AiOutlineGithub /> Github</Button>
                    </Link>
                </Row>

            </div>


        )
    }
}
