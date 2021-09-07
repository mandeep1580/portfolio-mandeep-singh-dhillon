import React, { Component } from 'react'
// import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'


export default class Websites extends Component {
    render() {
        return (
            <div>
                <div class="col-lg-3 col-md-6">
                <div class="card card-product-grid">
                    <a href="index.html" class="img-wrap"> 
                    <img src={this.props.img} class="card-img-top image" alt="website"/> 
                    </a>

                    {/* <button type="button" class="btn btn-dark py-2 btn-block">See Website</button> */}

                    <div class="card-body border-top text-center">
                    <div class="card-text">
                        <a href="index.html" class="card-link title"><h5 class="card-title text-muted">{ this.props.name }</h5></a>
                    <div class="tech mt-1">{this.props.tech }</div>
                    </div>
                </div>
                </div>
            </div>
            </div>

                // <CardGroup>
                // <Card>
                //     <Card.Img  src= {this.props.img} />
                //     <Card.Body>
                //     <Card.Title>{this.props.name}</Card.Title>
                //     <Card.Text>
                //         {this.props.tech}
                //     </Card.Text>
                //     </Card.Body>
                //     </Card>
                // </CardGroup>
                
        )
    }
}
