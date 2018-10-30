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

class App extends Component {
  state = {
    name : ''
  }
  render() {

    return (
      <div className="App">
        <Head className="Head" user={this.state.username}/>
        <Nav />
        <Sections />
        <div className='articles'>
        {this.state.name ? (<Router>
            <Articles path="/" />
            <Articles path={`/topics/:topic`} />
            <Post path="/post" />
            <Article path="/articles/:article_id"/>
          </Router>) : 
        <Login></Login>}
          
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
