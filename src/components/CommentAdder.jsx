import React, { Component, navigate } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';
import './css/commentAdder.css';

class CommentAdder extends Component {
  state = {
    comment: ''
  };
  render() {
    return (
      <form className="commentAdder" onSubmit={this.handleSubmit}>
        <label>Comment:</label>
        <textarea
          value={this.state.comment}
          onChange={this.handleOnChange}
          name="comment"
          id=""
          cols="10"
          rows="3"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const { _id } = this.props.user;
    const body = { body: comment, created_by: _id };
    api
      .postComment(body, this.props.article_id)
      .then(comment => {
        this.setState({
          comment: ''
        });
        return this.props.addComment(comment);
      })
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

CommentAdder.propTypes = {
  user: PropTypes.object,
  article_id: PropTypes.string,
  addComment: PropTypes.func
};

export default CommentAdder;
