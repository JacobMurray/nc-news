import React, { Component } from 'react';
import * as api from '../api'

class Articles extends Component {
    state = {
        articles: []
    }
    render() {
        console.log(this.state)

        return (
            
            <div className='articles'>
                {this.props.topic} Articles
                {this.state.articles[0] && 
                this.state.articles.map(article => {
                   return  (<div>{article.title}</div>)
                })
                }
            </div>
        );
    }

    componentDidMount () {
        this.fetchArticles()
        
    }

    fetchArticles = () => {
        return (api.getArticles(this.props.topic)
        .then(articles => this.setState({
            articles
        })))
    }
}

export default Articles;