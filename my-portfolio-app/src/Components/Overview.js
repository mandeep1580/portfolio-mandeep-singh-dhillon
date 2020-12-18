import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

export default class Overview extends Component {
    render() {
        return (
            <div className="container">
            <div className="heading">    
            <h1>Overview</h1>
            <hr></hr>
            </div>
            <Row>
            <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
            <p>
            Exposed to a multicultural professional setting in India and with an extensive experience of 18+ years in <strong>Organisational Behaviour, Training and Development,Quality Compliance, Adventure Tourism and Service Industry</strong>. I have gained a multi-dimensional profile enabling me to drive change in organisations through culture, analytics and learning.
            To further hone my skills and understanding in the field of best business practices, I completed a professional graduate level certification course in Organisational Behaviour at Harvard University - Extension School,alumni Aug, 2017. </p>
            <p>
            <strong>Aim:</strong> I envision to create a model for organisations to grow, by bringing continuous change, drive development and harness sustainability. </p>
            <p>
            <strong>Strength:</strong> My blend of analytics, behavioural sciences, outdoors and the service industry makes me extremely strong in driving change through scientific methods and building cultures by motivating people through engagement techniques. I am passionate about achieving excellence at workplace and motivated to gain better knowledge by following the continuous process of learning. Leadership qualities and meticulous planning in starting new projects with proven track record. One of my greatest strength is my ability to build relationships with in and outside an organisation which includes executives, management teams and professional staff. 
            </p>
            </div>
            <div className = "profile">    
            <img src="images/self.jpg" alt="Mandeep Profile"/>
            </div>    
            </Row>
            </div>
        )
    }
}
