import React, { Component } from 'react';

import Api from '../helper/api'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            page: 1,
            pageSize: 8,
            movies: [],
            year: ''
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        Api.get({
            count: true
        }).then((response) => {
            const count = parseInt(response[0].count);

            this.setState({
                count: Math.round(count / this.state.pageSize),
            });

            Api.get({
                Year: this.state.year,
                limit: this.state.pageSize,
                offset: ((this.state.page - 1) * this.state.pageSize)
            }).then((result) => {
                this.setState({
                    movies: result
                });
            })
        })
    }

    onChangeYear = (event) => {
        this.setState({ year: event.target.value }, () => this.getData());
    }

    onChangePage = (value) => {
        this.setState({ page: value }, () => this.getData());
    }

    pageChange = (flag) => {
        if (flag && this.state.page < this.state.count) {
            this.onChangePage(++this.state.page);
        } else if (!flag && this.state.page > 1) {
            this.onChangePage(--this.state.page);
        }
    }

    setPagination = () => {
        let pagination = [];

        for (let index = 1; index <= this.state.count; index++) {
            pagination.push(<a key={index} onClick={() => this.onChangePage(index)} className={'page-number' + (this.state.page === index ? ' current' : '')}>{index}</a>);
        }

        return pagination;
    }

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="page">
                        <div className="breadcrumbs">
                            <a href="#/">Home</a>
                            <span>Movie Review</span>
                        </div>

                        <div className="filters">
                            <select name="#" id="#" placeholder="Choose Category">
                                <option value="#">Action</option>
                                <option value="#">Drama</option>
                                <option value="#">Fantasy</option>
                                <option value="#">Horror</option>
                                <option value="#">Adventure</option>
                            </select>
                            <select name="year" id="year" value={this.state.year} onChange={this.onChangeYear}>
                                <option value="">Please Select</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                            </select>
                        </div>

                        <div className="movie-list">

                            {this.state.movies.map((movie, index) => (
                                <div key={index} className="movie">
                                    <figure className="movie-poster">
                                        <a href="#/review/{{movie.Id}}">
                                            <img src={movie.Poster} alt="#" />
                                        </a>
                                    </figure>
                                    <div className="movie-title"><a href="#/review/{{movie.Id}}">{movie.Title}</a></div>
                                    <p>{movie.Plot}</p>
                                </div>
                            ))}

                        </div>

                        <div className="pagination">
                            <a onClick={() => this.pageChange(false)} className="page-number prev"><i className="fa fa-angle-left"></i></a>
                            {this.setPagination()}
                            <a onClick={() => this.pageChange(true)} className="page-number next"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
