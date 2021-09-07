import React, { Component } from 'react'
import { Row } from 'react-bootstrap'


export default class About extends Component {
    render() {
        return (
            <div className="content-container">
            <div className="container">
                <div className="heading">    
                    <h1>About me</h1>
                    <hr></hr>
                </div>
                <div className="container">
                    <Row>
                        <div className = "profile">    
                            <img src="images/self.jpg" alt="Mandeep Profile"/>
                        </div>    

                        <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
                            
                            <strong>Aim:</strong>
                            <p> I envision to create a model for organisations to grow, bring continuous change, drive development and harness sustainability. </p>
                            
                            <strong>Overview:</strong>
                            <ul> 
                                <li>Focused software developer with strong foundation in full stack web development and experience
                                programming on various platforms.</li>
                                <li>Management professional and entrepreneur with over 20 years of working experience.</li>
                                <li>Conducted 5000+ man-hours in experiential learning workshops with covering over 7,000
                                participants.</li>
                            </ul>
                            <strong>Strengths:</strong>
                            <ul>
                                <li>Extremely strong in driving change through scientific methods and building cultures by motivating people through engagement techniques.</li>
                                <li>Passionate about achieving excellence at workplace and motivated to gain better knowledge by following the continuous process of learning.</li>
                                <li>Ability to build relationships with in and outside an organisation which includes executives, management teams and professional staff.</li>
                            </ul>                   
                        </div>
                    </Row>
                    <hr></hr>
                    <strong >Alumnus</strong>
                    <Row>
                         
                        <div className = "profile">    
                            <img src="images/bcit.jpg" alt="bcit"/>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
                            
                            <strong>Aim:</strong>
                            <p> I envision to create a model for organisations to grow, bring continuous change, drive development and harness sustainability. </p>
                            
                            <strong>Overview:</strong>
                            <ul> 
                                <li>Focused software developer with strong foundation in full stack web development and experience
                                programming on various platforms.</li>
                                <li>Management professional and entrepreneur for over 20 years of work experience.</li>
                                <li>Conducted over 5000+ man-hours in experiential learning workshops with covering over 7,000
                                participants.</li>
                            </ul>
                            <strong>Strength:</strong>
                            <ul>
                                <li>Extremely strong in driving change through scientific methods and building cultures by motivating people through engagement techniques.</li>
                                <li>Passionate about achieving excellence at workplace and motivated to gain better knowledge by following the continuous process of learning.</li>
                                <li>Ability to build relationships with in and outside an organisation which includes executives, management teams and professional staff.</li>
                            </ul>                   
                        </div>    
                    </Row>
                </div>
            
                </div>
            </div>
        )
    }
}
