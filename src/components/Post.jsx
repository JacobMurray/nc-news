import React, { Component } from 'react';
import * as api from '../api';
import {navigate} from '@reach/router'

class Post extends Component {
    state = {
        title: '',
        article: '',
        slug: 'football'
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Title</label>
                <input onChange={this.handleOnChange} type="text" name="title" id=""/>
                <label>Article</label>
                <textarea onChange={this.handleOnChange} name="article" id="" cols="30" rows="10"></textarea>
                <label>Category</label>
                <select name="" id="" onChange={this.handleOnChange}>
                <option value="football">Football</option>
                <option value="coding">Coding</option>
                <option value="cooking">Cooking</option>
                </select>
                <button>Submit</button>
            </form>
        );
    }

    handleOnChange = ({target : {value, name}}) => {
        this.setState({
            [name] : value
        })
    }

    handleOnSubmit = (event) =>{
        event.preventDefault()
        const {title, article, slug} = this.state
        const {_id} = this.props.user
        const body = {title, body : article, created_by :_id}
        api.postArticle(body, slug)
        .then((article) => navigate(`/articles/${article._id}`))
    }
}

export default Post;