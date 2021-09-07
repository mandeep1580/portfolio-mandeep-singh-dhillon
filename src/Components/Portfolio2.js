import React, { Component } from 'react'
import Websites from './Websites'
import Row from 'react-bootstrap/Row'


export default class Portfolio extends Component {
    render() {
        return (
            
            <div className="container">
            <hr></hr>
            <div className="heading">    
            <h1>Portfolio</h1>
            </div>
            <Row>
            <div className="row my-4">
                <Websites 
                img= "images/parlez.png"
                name= "Parlez"
                tech= "React and DotNet"
                />
                <Websites 
                img= "images/walkabooks.png"
                name= "Walkabooks"
                tech= "Angular"
                />
                <Websites 
                img= "images/bc-tourism.png"
                name= "BC Tourism"
                tech= "HTML and CSS"
                />
                <Websites 
                img= "images/tmdb.png"
                name= "The Movie Database"
                tech= "React"
                />
                </div>
                </Row>
                        
            </div>
                
            
        )
    }
}
