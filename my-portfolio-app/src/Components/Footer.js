import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer class="section-footer border-top py-4">
                <div class="container">
                    <section class="mx-auto">
                        <div class="row">
                        <aside class="col-md col-6">
                            <h6 class="title text-muted">Brands</h6>
                            <ul class="list-unstyled">
                                <li> <a href="index.html">Code Queens</a></li>
                                <li> <a href="index.html">Geeks 'R' Us</a></li>
                                <li> <a href="index.html">Home Software</a></li>
                                <li> <a href="index.html">CodeMart</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title text-muted">Company</h6>
                            <ul class="list-unstyled">
                                <li> <a href="index.html">About us</a></li>
                                <li> <a href="index.html">Career</a></li>
                                <li> <a href="index.html">Find a store</a></li>
                                <li> <a href="index.html">Rules and terms</a></li>
                                <li> <a href="index.html">Sitemap</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title text-muted">Help</h6>
                            <ul class="list-unstyled">
                                <li> <a href="index.html">Contact us</a></li>
                                <li> <a href="index.html">Money refund</a></li>
                                <li> <a href="index.html">Order status</a></li>
                                <li> <a href="index.html">Shipping info</a></li>
                                <li> <a href="index.html">Open dispute</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title text-muted">Account</h6>
                            <ul class="list-unstyled">
                                <li> <a href="index.html"> User Login </a></li>
                                <li> <a href="index.html"> User register </a></li>
                                <li> <a href="index.html"> Account Setting </a></li>
                                <li> <a href="index.html"> My Orders </a></li>
                            </ul>
                        </aside>   
                    </div> 
                </section>

                <section class="footer-bottom border-top row">
                    <div class="col-md-2">
                        <p class="text-muted"> &copy; 2020 HWS </p>
                    </div>
                    <div class="col-md-8 text-md-center">
                        <span class="px-2">info@hws.ca</span>
                        <span class="px-2">+778-800-8080</span>
                        <span class="px-2">555 Seymour St. Vancouver, BC</span>
                    </div>

                 </section>
            </div>
        </footer>
        )
    }
}