import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';
import './css/comment.css'
import CommentAdder from './CommentAdder';


class Comments extends Component {
    state = {
        comments: []
    }
    render() {
        return (
            <div >
                <CommentAdder />
                {this.state.comments[0] && this.state.comments.map(comment => {
                   return ( <div key={comment._id} className='comment'>
                       <p>{comment.body}</p>
                       <h4>Commentor: {comment.created_by.name}</h4>
                       <h4>votes: {comment.votes}</h4>
                   </div>)
                })}
            </div>
        );
    }
    componentDidMount() {
        this.fetchComments();
      }
    
      fetchComments = () => {
        api.getArticleComments(this.props.article_id).then(comments =>
          this.setState({
            comments
          })
        );
      };
    
}

Comments.propTypes = {
    article_id: PropTypes.string
};
export default Comments;