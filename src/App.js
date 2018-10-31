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
import Logout from './components/Logout';

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
              <Post path="/post" user={this.state}/>
              <Article path="/articles/:article_id" user={this.state.user}/>
              <Logout path="/logout" handleLogout={this.logout}/>
            </Router>
          ) : (
            <Login handleSubmit={this.fetchName}/>
          )}
        </div>
        <Foot />
      </div>
    );
  }

  componentDidMount () {
    const state = localStorage.getItem('state')
        this.setState(JSON.parse(state))
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.user !== this.state.user){
      localStorage.setItem('state' , JSON.stringify(this.state))
    }
    
  }

  fetchName = (event, username) => {
    event.preventDefault()
    api.getUserName(username)
    .then((user) => this.setState({
      user
    }))
  }
  logout = () => {
    localStorage.clear()
    this.setState({
      user: {}
    })
  }

}

export default App;
