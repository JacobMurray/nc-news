import React, { Component } from 'react';
import './App.css';
import Head from './components/Head'
import Nav from './components/Nav';
import Sections from './components/Sections';
import Articles from './components/Articles';
import Foot from './components/Foot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head className='Head'/>
        <Nav />
        <Sections />
        <Articles />
        <Foot />
      </div>
    );
  }
}

export default App;
