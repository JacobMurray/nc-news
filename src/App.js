import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Nav from './components/Nav';
import Sections from './components/Sections';
import Articles from './components/Articles';
import Foot from './components/Foot';
import { Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head className="Head" />
        <Nav />
        <Sections />
        <div className='articles'>
          <Router>
            <Articles path="/" />
            <Articles path={`/topics/:topic`} />
          </Router>
        </div>
        <Foot />
      </div>
    );
  }
}

export default App;
