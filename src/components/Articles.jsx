import React, { Component } from 'react';
import * as api from '../api';
import './css/Articles.css';
import PropTypes from 'prop-types';
import { navigate, Link } from '@reach/router';

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="articles">
        {this.props.topic} Articles
        {this.state.articles[0] &&
          this.state.articles.map(article => {
            return (
              <Link to={`/articles/${article._id}`}>
                <div key={article._id} className="article">
                  <h3 className="artTitle">{article.title}</h3>
                  <p>{article.body}</p>
                </div>
              </Link>
            );
          })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    return api.getArticles(this.props.topic).then(articles =>
      this.setState({
        articles
      })
    );
  };

  goToArticle = event => {
    console.log(event);
  };
}

Articles.propTypes = {};

export default Articles;
