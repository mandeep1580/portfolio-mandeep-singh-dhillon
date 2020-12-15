import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Skills extends Component {
    render() {
        return (
            <div className = 'container'>
                <h2>Skills</h2>
            <div className= 'skills'>
                <h5>HTML/CSS</h5>
                <ProgressBar variant="success" now={90} />
                <h5>JavaScript</h5>
                <ProgressBar variant="info" now={20} />
                <h5>React</h5>
                <ProgressBar variant="warning" now={60} />
                <h5>SQL Server Management</h5>
                <ProgressBar variant="danger" now={80} />
                <h5>Dot Net</h5>
                <ProgressBar variant="primary" now={80} />

            </div>
            </div>
        )
    }
}

