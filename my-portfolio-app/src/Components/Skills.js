import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Skills extends Component {
    render() {
        return (
            <div className= 'col-lg-8 col-8-md'>
                <ProgressBar variant="success" now={40}/>
                <ProgressBar variant="info" now={20} />
                <ProgressBar variant="warning" now={60} />
                <ProgressBar variant="danger" now={80} />
            </div>
        )
    }
}
