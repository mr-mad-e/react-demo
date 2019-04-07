import React, { Component } from 'react';

import Api from '../helper/api'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        Api.get({limit:4})
            .then((result) => {
                this.setState({
                    movies: result
                });
            })
    }

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="page">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="slider">
                                    <ul className="slides">
                                        <li><a href="#"><img src="assets/dummy/slide-1.jpg" alt="Slide 1" /></a></li>
                                        <li><a href="#"><img src="assets/dummy/slide-2.jpg" alt="Slide 2" /></a></li>
                                        <li><a href="#"><img src="assets/dummy/slide-3.jpg" alt="Slide 3" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-sm-6 col-md-12">
                                        <div className="latest-movie">
                                            <a href="#"><img src="assets/dummy/thumb-1.jpg" alt="Movie 1" /></a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-12">
                                        <div className="latest-movie">
                                            <a href="#"><img src="assets/dummy/thumb-2.jpg" alt="Movie 2" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            {this.state.movies.map((movie, index) => (
                                <div key={index} className="col-sm-6 col-md-3">
                                    <div className="latest-movie">
                                        <a href="#"><img src={movie.Poster} alt="Movie 3" /></a>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <h2 className="section-title">December premiere</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.</p>
                                <ul className="movie-schedule">
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2 className="section-title">November premiere</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.</p>
                                <ul className="movie-schedule">
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2 className="section-title">October premiere</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.</p>
                                <ul className="movie-schedule">
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                    <li>
                                        <div className="date">16/12</div>
                                        <h2 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        );
    }
}

export default Home;
