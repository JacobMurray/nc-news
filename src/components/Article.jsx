import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { belongs_to, body, created_by, title, votes } = this.state.article;
    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <h4>Belongs to: {belongs_to}</h4>
        <h4>votes: {votes}</h4>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api.getArticleById(this.props.article_id).then(article =>
      this.setState({
        article
      })
    );
  };
}

Article.propTypes = {};

export default Article;
