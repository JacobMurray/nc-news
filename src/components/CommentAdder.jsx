import React, { Component } from 'react';
import * as api from '../api';

class CommentAdder extends Component {
    state = {
        comment : ''
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Comment:</label>
                <textarea value={this.state.comment} onChange={this.handleOnChange} name="comment" id="" cols="30" rows="10"></textarea>
                <button type="submit">Submit</button>
            </form>
        );
    }

    handleOnChange = ({target : {value, name}}) => {
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {comment} = this.state
        const {_id} = this.props.user
        const body = { body : comment, created_by :_id}
        api.postComment(body, this.props.article_id)
        .then((comment)=>{
            this.setState({
                comment : ''
            })
            return this.props.addComment(comment)
        })
    }
//(comment)=>this.props.addComment(comment)
    
}

export default CommentAdder;