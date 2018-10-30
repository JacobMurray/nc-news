import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Nav from './components/Nav';
import Sections from './components/Sections';
import Articles from './components/Articles';
import Foot from './components/Foot';
import { Router } from '@reach/router';
import Post from './components/Post';
import Article from './components/Article';
import Login from './components/Login';
import * as api from './api';

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="App">
        <Head className="Head" user={this.state.user.name} />
        <Nav />
        <Sections />
        <div className="articles">
          {this.state.user.name ? (
            <Router>
              <Articles path="/" />
              <Articles path={`/topics/:topic`} />
              <Post path="/post" />
              <Article path="/articles/:article_id" />
            </Router>
          ) : (
            <Login handleSubmit={this.fetchName}/>
          )}
        </div>
        <Foot />
      </div>
    );
  }

  fetchName = (event, username) => {
    event.preventDefault()
    api.getUserName(username)
    .then((user) => this.setState({
      user
    }))
  }

}

export default App;
