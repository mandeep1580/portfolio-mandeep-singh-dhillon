import React, { Component } from 'react'
// import Container from 'react'


export default class Contact extends Component {
    render() {
    
        // validateForm() {
        //     var x = document.forms["contact-form"]["fname"].value;
        //     if (x == "") {
        //       alert("Name must be filled out");
        //       return false;
        //     }
        //   }

        return (
            <div className="container">
            <div className="heading">    
            <h1>Contact</h1>
            <hr></hr>
            </div>
            <div className="contact">
            <form id="contact-form" >
                <div className = 'container' >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" text-align="centre">Submit</button>
                </div>
            </form>
            </div>
            </div>
           
        
            
        )
    }
}

// onSubmit={this.handleSubmit.bind(this)}  method="POST"