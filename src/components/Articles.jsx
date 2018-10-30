import React, { Component } from 'react';
import * as api from '../api';
import './css/Articles.css';
import PropTypes from 'prop-types';

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
              <div key={article._id} className='article'>
                <div className='artTitle'>{article.title}</div>
                <div>{article.body}</div>
              </div>
            );
          })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    return api.getArticles(this.props.topic).then(articles =>
      this.setState({
        articles
      })
    );
  };
}

Articles.propTypes = {

};

export default Articles;
