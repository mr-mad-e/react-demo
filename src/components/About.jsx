import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="page">
                        <div className="breadcrumbs">
                            <a href="">Home</a>
                            <span>About us</span>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <figure><img src="assets/dummy/figure.jpg" alt="figure image" /></figure>
                            </div>
                            <div className="col-md-8">
                                <p className="leading">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium totam.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia
                                  non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                  ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9">
                                <h2 className="section-title">Vision &amp Misssion</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia
                                  non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                  ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam dignissimos ducimus qui blanditiis praesentium voluptatum atque.</p>
                            </div>
                            <div className="col-md-3">
                                <h2 className="section-title">Useful Links</h2>
                                <ul className="arrow">
                                    <li><a href="#">Eiusmod tempor incididunt</a></li>
                                    <li><a href="#">Tenim ad minim venia</a></li>
                                    <li><a href="#">Quis nostrud exercitation</a></li>
                                    <li><a href="#">Ullamco laboris reprehenderit</a></li>
                                    <li><a href="#">Duis aute dolor voluptat</a></li>
                                    <li><a href="#">Velit esse cillum dolore</a></li>
                                    <li><a href="#">Excepteur sint occaeca</a></li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="section-title">Our Team</h2>
                        <div className="row">

                            <div className="col-md-3">
                                <div className="team">
                                    <figure className="team-image"><img src="assets/dummy/person-1.jpg" alt="" /></figure>
                                    <h2 className="team-name">Sarah Stuart</h2>
                                    <small className="team-title">Co-founder</small>
                                    <div className="social-links">
                                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                                        <a href="" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                        <a href="" className="pinterest"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team">
                                    <figure className="team-image"><img src="assets/dummy/person-2.jpg" alt="" /></figure>
                                    <h2 className="team-name">John Doe</h2>
                                    <small className="team-title">Managing Director</small>
                                    <div className="social-links">
                                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                                        <a href="" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                        <a href="" className="pinterest"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team">
                                    <figure className="team-image"><img src="assets/dummy/person-3.jpg" alt="" /></figure>
                                    <h2 className="team-name">Jessica Branson</h2>
                                    <small className="team-title">Reviewer</small>
                                    <div className="social-links">
                                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                                        <a href="" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                        <a href="" className="pinterest"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team">
                                    <figure className="team-image"><img src="assets/dummy/person-4.jpg" alt="" /></figure>
                                    <h2 className="team-name">Sarah Stuart</h2>
                                    <small className="team-title">Consultant</small>
                                    <div className="social-links">
                                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                                        <a href="" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                        <a href="" className="pinterest"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default About;
