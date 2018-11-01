import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Nav from './components/Nav';
import Sections from './components/Sections';
import Articles from './components/Articles';
import Foot from './components/Foot';
import { Router, navigate } from '@reach/router';
import Post from './components/Post';
import Article from './components/Article';
import Login from './components/Login';
import * as api from './api';
import Logout from './components/Logout';

class App extends Component {
  state = {
    user: {},
    sortBy: ''
  };
  render() {
    return (
      <div className="App">
        <Head className="Head" user={this.state.user} />
        <Nav />
        <Sections handleSelect={this.selectSortBy}/>
        <div className="articles">
          {this.state.user.name ? (
            <Router>
              <Articles path="/" sortBy={this.state.sortBy}/>
              <Articles path={`/topics/:topic`} sortBy={this.state.sortBy}/>
              <Post path="/post" user={this.state.user}/>
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

  selectSortBy = ({target : {value, name}}) => {
    this.setState({
        sortBy : value
    })
}

  fetchName = (event, username) => {
    event.preventDefault()
    api.getUserName(username)
    .then((user) => this.setState({
      user
    })).then(navigate('/'))
  }
  logout = () => {
    localStorage.clear()
    this.setState({
      user: {}
    })
  }

}

export default App;
