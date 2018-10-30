import React from 'react';
import Head from './components/Head'
import Nav from './components/Nav';
import Sections from './components/Sections';
import Articles from './components/Articles';
import Foot from './components/Foot';

const Home = () => {
    return (
        <div>
           <Head className='Head'/>
        <Nav />
        <Sections />
        <Articles />
        <Foot /> 
        </div>
    );
};

export default Home;