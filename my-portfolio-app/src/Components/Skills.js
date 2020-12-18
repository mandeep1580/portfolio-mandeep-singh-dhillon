import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Skills extends Component {
    render() {
        return (
            <div className = 'container'>
                <div className= "heading">
                <h1>Skills</h1>
                </div>
                <Row>
            <div className= 'skills col-lg-6 col-md-6 col-sm-12'>
                <div className= "heading">
                <h3>Technical</h3>
                </div>
                <h5>HTML/CSS</h5>
                <ProgressBar variant="success" now={90} />
                <h5>JavaScript</h5>
                <ProgressBar variant="info" now={40} />
                <h5>React</h5>
                <ProgressBar variant="warning" now={60} />
                <h5>SQL Server Management</h5>
                <ProgressBar variant="danger" now={80} />
                <h5>Dot Net</h5>
                <ProgressBar variant="primary" now={50} />
            </div>
            <div className= 'skills col-lg-6 col-md-6 col-sm-12'>
                <div className= "heading">
                <h3>Emotional</h3>
                </div>
                <h5>Team Work</h5>
                <ProgressBar variant="success" now={90} />
                <h5>Negotiations</h5>
                <ProgressBar variant="info" now={70} />
                <h5>Leadership</h5>
                <ProgressBar variant="warning" now={80} />
                <h5>Creativity</h5>
                <ProgressBar variant="danger" now={80} />
                <h5>Communication</h5>
                <ProgressBar variant="primary" now={80} />
            </div>
            </Row>

            </div>
        )
    }
}

