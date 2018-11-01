import React, { Component } from 'react';
import * as api from '../api';
import './css/Articles.css';
import { Link } from '@reach/router';
import Votes from './Votes';

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
              <div className="article" key={article._id}>
              <Link  to={`/articles/${article._id}`}>
                <div  >
                  <h3 className="artTitle">{article.title}</h3>
                  <p>{article.body}</p>
                  
                </div>
              </Link>
              <Votes votes={article.votes} id={article._id} type={'articles'}/>
              </div>
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
}

export default Articles;
