import React, { Component } from 'react'
import Websites from './Websites'
import { Row } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Link from "react-bootstrap/NavLink"


export default class Portfolio extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="container">
                    <div className="heading">
                        <h1>Portfolio</h1>
                    </div>
                    <Row className="portfolio">
                        <Websites
                            img="images/tmdb.png"
                            name="The Movie App"
                            tech=" Api based app - React"
                            website="https://determined-mcclintock-b7a166.netlify.app/"
                            github="https://github.com/mandeep1580/my-movie-app"
                        />
                        <Websites
                            img="images/walkabooks.png"
                            name="Walkabooks"
                            tech="Front End - Angular"
                            website="https://walkabooks.netlify.app"
                            github="https://github.com/mandeep1580/front-end-project-group6-front-end-project.git"
                        />
                        <Websites
                            img="images/nomadic-compass.jpg"
                            name="Nomadic Compass"
                            tech="Fullstack - MERN"
                            website="https://nervous-montalcini-fcf9b8.netlify.app/"
                            github="https://github.com/mandeep1580/nomadic-compass.git"
                        />
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="Fullstack app - React and .Net"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/dotnetproject-team1_netproject"
                        />
                        <Websites
                            img="images/jot-it-down.png"
                            name="Jot It Down"
                            tech="Fullstack - Serverless"
                            website=""
                            github="https://github.com/mandeep1580/front-end-jotitdown.git"
                        />
                    </Row>

                    <hr className="page-break"></hr>

                </div>
                {/* <div className="button">
                    <Link href="/experience">
                        <Button variant="primary">Experience</Button>
                    </Link>
                </div> */}


            </div>

        )
    }
}
