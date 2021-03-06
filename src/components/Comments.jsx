import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';
import './css/comment.css';
import CommentAdder from './CommentAdder';
import Votes from './Votes';
import Delete from './Delete';
import { timeSince } from '../utils.js';
import { navigate } from '@reach/router';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <CommentAdder
          user={this.props.user}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        {this.state.comments[0] &&
          this.state.comments.map(comment => {
            return (
              <div key={comment._id} className="comment">
                <p>{comment.body}</p>
                <h4>Commentor: {comment.created_by.name}</h4>
                <img
                  src={comment.created_by.avatar_url}
                  alt="avatar img"
                  onError={e =>
                    (e.target.src =
                      'http://thesweetpeople.com/wp/wp-content/uploads/2015/08/person_placeholder.png')
                  }
                />
                <h4>
                  created: {timeSince(Date.parse(comment.created_at))} ago
                </h4>
                <Votes type="comments" votes={comment.votes} id={comment._id} />
                {this.props.user._id === comment.created_by._id && (
                  <Delete id={comment._id} handleClick={this.deleteComment} />
                )}
              </div>
            );
          })}
      </div>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api
      .getArticleComments(this.props.article_id)
      .then(comments =>
        this.setState({
          comments
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

  addComment = comment => {
    this.setState(prevState => {
      return { comments: [comment, ...prevState.comments] };
    });
  };

  deleteComment = id => {
    const newComments = this.state.comments.filter(
      comment => comment._id !== id
    );
    api
      .deleteComment(id, 'comments')
      .then(
        this.setState({
          comments: newComments
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

Comments.propTypes = {
  article_id: PropTypes.string,
  user: PropTypes.object
};
export default Comments;
