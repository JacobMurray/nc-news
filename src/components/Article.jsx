import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class Article extends Component {
    state = {
        article : {}
    }
    render() {
        return (
            <div>
                selected Article
            </div>
        );
    }

    componentDidMount () {
        this.fetchArticle()
    }

    fetchArticle = () => {
        api.getArticleById(this.props.article_id)
        .then(article => this.setState({
            article
        }))
    }
}



Article.propTypes = {

};

export default Article;