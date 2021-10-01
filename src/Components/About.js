import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import bcit from '../images/bcit.png'
import harvard from '../images/harvard.png'
import ahla from '../images/ahla.jpg'
// import Button from 'react-bootstrap/Button'
// import Link from "react-bootstrap/NavLink"


export default class About extends Component {
    render() {
        return (
            <div className="content-container" href="#about">
                <div className="container">
                    <div className="heading">
                        <h1>About me</h1>

                    </div>
                    <div className="container">
                        <Row className="about-card">
                            <div className="col-lg-8 col-md-8 col-sm-12 mt-3">

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

                            <div className="profile">
                                <img src="images/self.jpg" alt="Mandeep Profile" />
                            </div>
                        </Row>

                        <div className="heading">
                            <h3>Alumnus</h3>
                        </div>
                        <Row className="about-card">

                            <div className="col-lg-8 col-md-8 col-sm-12 mt-3">

                                <h5>Software Systems Developer - Certificate</h5>
                                <p> The program provided a strong foundation in multiple emerging web and mobile application development tools and technologies </p>

                                <ul>
                                    <li> <strong>Front-End Web Development</strong> - HTML5, CSS, JavaScript, React and Angular</li>
                                    <li> <strong>Back-End Development </strong>  - Web API, Node js, C#.NET and ASP.NET</li>
                                    <li><strong>Databases</strong> - MS SQL Server, MySQL, MongoDB and DynamoDb</li>
                                    <li><strong>Mobile Development</strong> Swift, Kotlin, React Native and Flutter</li>
                                </ul>

                            </div>
                            <div className="alumnus">
                                <p>2019 - 2020</p>
                                <img src={bcit} alt="bcit" />
                            </div>
                        </Row>

                        <Row className="about-card">



                            <div className="col-lg-8 col-md-8 col-sm-12 mt-3">

                                <h5>Organisational Behaviour - Certificate</h5>
                                <p> The program provided insight into strategies and methods that cultivate and strengthen group performance, resource management, and organizational dynamics. </p>

                                <ul>
                                    <li> <strong>Organisational Behaviour</strong> - Communications, motivation, group dynamics, leadership, power, organisational design and culture.</li>
                                    <li> <strong>Negotiation and Organizational Conflict Resolution </strong>  - Effective negotiation, conflict resolution and relationship management.</li>
                                    <li><strong>Creative Thinking and Organisational Success</strong> - Design thinking, assumption busting, diverging and converging. </li>
                                    <li><strong>Gender, Leadership and Management</strong> - Gender-based differences at work and in society both historical and cross-cultural perspectives.</li>
                                </ul>

                            </div>

                            <div className="alumnus">
                                <p>2016 - 2017</p>
                                <img src={harvard} alt="harvard" />
                            </div>
                        </Row>

                        <Row className="about-card">

                            <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
                                <h5>Hospitality Management - Diploma</h5>
                                <p> The course provided a comprehensive overview of the specific areas needed to succeed in managing a hospitality operation. </p>
                            </div>

                            <div className="alumnus">
                                <p>1997 - 2000</p>
                                <img src={ahla} alt="ahla" />
                            </div>

                        </Row>

                        <hr className="page-break"></hr>

                    </div>
                    {/* <div className="button">
                        <Link href="/portfolio">
                            <Button variant="primary">Portfolio</Button>
                        </Link>
                    </div> */}
                </div>

            </div>
        )
    }
}
