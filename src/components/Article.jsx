import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import './css/Articles.css';
import Comments from './Comments';
import Votes from './Votes';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { belongs_to, body, created_by, title, votes } = this.state.article;
    return (
      <div>
        <div className="article">
          <h3>{title}</h3>
          <p>{body}</p>
          <h4>Belongs to: {belongs_to}</h4>
          <Votes votes={votes} article_id={this.props.article_id}/>
          {created_by && <h3>Created_by: {created_by.name}</h3>}
        </div>
        <div className="comments">
          <Comments user={this.props.user} article_id={this.props.article_id} />
        </div>
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

Article.propTypes = {
  user: PropTypes.object
};

export default Article;
