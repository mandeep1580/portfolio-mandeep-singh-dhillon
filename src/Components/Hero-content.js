import { Component } from 'react'
import { Button } from 'react-bootstrap'


export default class HeroContent extends Component {
    render() {
        return (
                <div className="hero-content col-lg-12 col-md-12 col-sm-12">
                    <div className="hero-title col-lg-12 col-md-12 col-sm-12">
                        <h4> Hello, I am </h4>
                        <h2> Mandeep Singh Dhillon </h2>
                        <h3> Software Professional </h3>
                    </div>
                    <div> 
                        <ul> With over 25 years of experience in project management, 
                        quality assurance, and release management. Skilled in microservice releases, CI/CD, 
                        Web API, MySQL, Selenium, and Git, I combine technical expertise and leadership to 
                        ensure high-quality software delivery and effective team collaboration. </ul>
                    </div>

                <div className="hero-button col-lg-12 col-md-12 col-sm-12">
                    <Button className="hero-button" href="/about">About Me</Button>
                </div>
                </div>
        )
    }
}
