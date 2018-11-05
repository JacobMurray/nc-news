import React, { Component } from 'react';
import * as api from '../api';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';
import './css/post.css';

class Post extends Component {
  state = {
    title: '',
    article: '',
    slug: 'football'
  };
  render() {
    return (
      <form className="postForm" onSubmit={this.handleOnSubmit}>
        <label>Title</label>
        <input onChange={this.handleOnChange} type="text" name="title" id="" />
        <label>Article</label>
        <textarea
          onChange={this.handleOnChange}
          name="article"
          id=""
          cols="30"
          rows="10"
        />
        <label>Category</label>
        <select name="" id="" onChange={this.selectChange}>
          <option value="football">Football</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }

  selectChange = ({ target: { value, name } }) => {
    this.setState({
      slug: value
    });
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { title, article, slug } = this.state;
    const { _id } = this.props.user;
    const body = { title, body: article, created_by: _id };
    api
      .postArticle(body, slug)
      .then(article => navigate(`/articles/${article._id}`))
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

Post.propTypes = {
  user: PropTypes.object
};

export default Post;
