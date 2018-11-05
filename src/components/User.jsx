import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from '@reach/router';
import * as api from '../api';
import './css/user.css';

class User extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <h2>Hello {this.props.user.name}</h2>
        <img
          src={this.props.user.avatar_url}
          alt="avatar img"
          onError={e =>
            (e.target.src =
              'http://thesweetpeople.com/wp/wp-content/uploads/2015/08/person_placeholder.png')
          }
        />
        <h2>Your articles</h2>
        {this.state.articles
          .filter(article => article.created_by._id === this.props.user._id)
          .map(article => {
              return (
            <Link to={`/articles/${article._id}`}>
              <div>
                <h4 className="artTitle">{article.title}</h4>
              </div>
              </Link>);
          })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    return api
      .getArticles(this.props.topic)
      .then(articles =>
        this.setState({
          articles,
          loading: false
        })
      )
      .catch(err =>
        navigate('/err', {
          replace: true,
          state: {
            code: err.response.status,
            message: err.response.data.message,
            from: '/article'
          }
        })
      );
  };
}

User.propTypes = {
  user: PropTypes.object
};

export default User;
