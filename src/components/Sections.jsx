import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../api'

class Sections extends Component {
    state = {
        topics: []
    }
    render() {
        return (
            <div className='section'>
                Section
                {this.state.topics.map((topic) => {
                    return <div key={topic._id}><Link to={`/topic/${topic.slug}`} >{topic.title}</Link> </div>
                })}
            </div>
        );
    }

    componentDidMount () {
        this.fetchTopics()
        .then(topics => this.setState({
            topics
        }))
    }

    fetchTopics = () => {
        return api.getTopics()
    }
}

export default Sections;