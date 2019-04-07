import React, { Component } from 'react';

class JoinUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.config.count || 0,
            page: props.config.page || 1,
            pageSize: props.config.pageSize || 10,
            
        };

        console.log(props);
    }

    onChangePage = (value) => {
        this.setState({ page: value }, () => this.props.getData());
    }

    pageChange = (flag) => {
        if (flag && this.state.page < this.state.count) {
            this.onChangePage(++this.state.page);
        } else if (!flag && this.state.page > 1) {
            this.onChangePage(--this.state.page);
        }
    }

    getPagination = () => {
        let pagination = [];

        for (let index = 1; index <= this.state.count; index++) {
            pagination.push(<a key={index} onClick={() => this.onChangePage(index)} className={'page-number' + (this.state.page === index ? ' current' : '')}>{index}</a>);
        }

        return pagination;
    }

    render() {
        return (
            <div className="pagination">
                <a onClick={() => this.pageChange(false)} className="page-number prev"><i className="fa fa-angle-left"></i></a>
                {this.getPagination()}
                <a onClick={() => this.pageChange(true)} className="page-number next"><i className="fa fa-angle-right"></i></a>
            </div>
        );
    }
}

export default JoinUs;
