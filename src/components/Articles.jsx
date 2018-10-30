import React, { Component } from 'react';
import * as api from '../api'

class Articles extends Component {
    state = {
        articles: []
    }
    render() {
        return (
            <div className='articles'>
                Articles
            </div>
        );
    }

    componentDidMount () {
        this.fetchArticles()
        .then(articles => this.setState({
            articles
        }))
    }

    fetchArticles = () => {
        return api.getArticles()
    }
}

export default Articles;