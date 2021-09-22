import React, { Component } from 'react'
import Websites from './Websites'
import { Row } from 'react-bootstrap'


export default class portfolio2 extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="container">
                    <div className="heading">
                        <h1>Portfolio</h1>
                    </div>
                    <Row className="portfolio">
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="React"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/cookit-mandeep1580"
                        />
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="Angular"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/cookit-mandeep1580"
                        />
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="Fullstack"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/cookit-mandeep1580"
                        />
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="Serverless"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/cookit-mandeep1580"
                        />
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="Kotlin"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/cookit-mandeep1580"
                        />
                        <Websites
                            img="images/parlez.png"
                            name="Parlez"
                            tech="Swift"
                            website="https://parlezz.netlify.app"
                            github="https://github.com/mandeep1580/cookit-mandeep1580"
                        />
                    </Row>

                </div>

            </div>

        )
    }
}
