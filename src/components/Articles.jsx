import React, { Component } from 'react';
import * as api from '../api';
import './css/Articles.css';
import { Link, navigate } from '@reach/router';
import Votes from './Votes';
import Delete from './Delete';
import { timeSince } from '../utils.js';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

class Articles extends Component {
  state = {
    articles: [],
    loading:true
  };
  render() {
    const numOfArticles = this.state.articles.reduce((acc,article) =>{
      if(!acc[article.belongs_to]) acc[article.belongs_to] = 1
      else acc[article.belongs_to]++
      return acc
    },{})
    const data = {
      labels: [
        'Coding',
        'Football',
        'Cooking'
      ],
      datasets: [{
        data: [numOfArticles.coding, numOfArticles.football, numOfArticles.cooking],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };
    return (
      
      <div className="articles">
        {this.props.topic} Articles
        <Doughnut data={data} />
        {this.state.loading ?  <h2>loading ...</h2> :
          this.state.articles.map(article => {
            return (
              <div className="article" key={article._id}>
                <Link to={`/articles/${article._id}`}>
                  <div>
                    <h3 className="artTitle">{article.title}</h3>
                    <p>{article.body}</p>
                    <h4>
                      created: {timeSince(Date.parse(article.created_at))} ago
                    </h4>
                  </div>
                </Link>
                <Votes
                  votes={article.votes}
                  id={article._id}
                  type={'articles'}
                />
                {this.props.user._id === article.created_by._id && (
                  <Delete
                    id={article._id}
                    handleClick={this.deleteArticle}
                  />
                )}
              </div>
            );
          })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles()
  }

  componentDidUpdate(prevProps) {
    if(this.props.userpage && prevProps.userpage !== this.props.userpage){
      let arr = [...this.state.articles];
      const newState = arr.filter( article => article.created_by._id === this.props.user._id)
      this.setState({
        articles: newState
      })
    }
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
    if (prevProps.sortBy !== this.props.sortBy) {
      this.sortArticles(this.props.sortBy);
    }
  }

  sortArticles = sortBy => {
    const sort = sortBy === 'new' ? 'created_at' : 'votes';
    let arr = [...this.state.articles];
    const newArr = arr.sort((a, b) => {
      if (a[sort] > b[sort]) return -1;
      if (a[sort] < b[sort]) return 1;
      return 0;
    });
    this.setState({
      articles: newArr
    });
  };

  deleteArticle = id => {
    const newArticles = this.state.articles.filter(
      article => article._id !== id
    );
    api.deleteComment(id, 'articles').then(
      this.setState({
        articles: newArticles
      })
    )
    .catch(err =>
      navigate('/err', { replace: true, state: { code: err.response.status, message: err.response.data.message, from: '/article' } })
    );
  };

  fetchArticles = () => {
    return api.getArticles(this.props.topic).then(articles =>
      this.setState({
        articles,
        loading: false
      })
    )
    .catch(err =>
      navigate('/err', { replace: true, state: { code: err.response.status, message: err.response.data.message, from: '/article' } })
    );
  };
}

Articles.propTypes = {
  user: PropTypes.object,
  sortBy: PropTypes.string
};

export default Articles;
