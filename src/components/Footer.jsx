import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="widget">
                                <h3 className="widget-title">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempore vitae mollitia nesciunt
            saepe cupiditate</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="widget">
                                <h3 className="widget-title">Recent Review</h3>
                                <ul className="no-bullet">
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Sit amet consecture</a></li>
                                    <li><a href="#">Dolorem respequem</a></li>
                                    <li><a href="#">Invenore veritae</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="widget">
                                <h3 className="widget-title">Help Center</h3>
                                <ul className="no-bullet">
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Sit amet consecture</a></li>
                                    <li><a href="#">Dolorem respequem</a></li>
                                    <li><a href="#">Invenore veritae</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="widget">
                                <h3 className="widget-title">Join Us</h3>
                                <ul className="no-bullet">
                                    <li><a href="#">Lorem ipsum dolor</a></li>
                                    <li><a href="#">Sit amet consecture</a></li>
                                    <li><a href="#">Dolorem respequem</a></li>
                                    <li><a href="#">Invenore veritae</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="widget">
                                <h3 className="widget-title">Social Media</h3>
                                <ul className="no-bullet">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Google+</a></li>
                                    <li><a href="#">Pinterest</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="widget">
                                <h3 className="widget-title">Newsletter</h3>
                                <form action="#" className="subscribe-form">
                                    <input type="text" placeholder="Email Address" />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="colophon">Copyright 2014 Company name, Designed by Themezy. All rights reserved</div>
                </div>

            </footer>
        );
    }
}

export default Footer;
