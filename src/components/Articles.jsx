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
    if (prevProps.sortBy !== this.props.sortBy){
      this.sortArticles(this.props.sortBy)
    }
  }

  sortArticles= (sortBy) => {
    const sort = sortBy === 'new' ? 'created_at' : 'votes'
    let arr = [...this.state.articles]
    const newArr = arr.sort((a,b)=> {
      if(a.votes > b.votes) return -1
      if(a.votes < b.votes) return 1
      return 0
    })
    this.setState({
      articles : newArr
    })
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
