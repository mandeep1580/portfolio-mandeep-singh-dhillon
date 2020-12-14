import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

export default class Profile extends Component {
    render() {
        return (
            <div>
              
                    <Row>
                        <Col xs={6} md={4}>
                        <Image src="self.png/171x180" thumbnail />
                        </Col>
                    </Row>
               
            </div>
        )
    }
}
