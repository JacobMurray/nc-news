import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';
import * as api from '../api';
import PropTypes from 'prop-types';

class Sections extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="section">
        <h3>Search By</h3>
        <select name="" id="" onChange={this.props.handleSelect}>
          <option value="popular">Popular</option>
          <option value="new">New</option>
        </select>

        <h3>Sections</h3>
        {this.state.topics.map(topic => {
          return (
            <div key={topic._id}>
              <Link to={`/topics/${topic.slug}`}>{topic.title}</Link>{' '}
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics().then(topics =>
      this.setState({
        topics
      })
    );
  }

  fetchTopics = () => {
    return api
      .getTopics()
      .catch(err =>
        navigate('/err', {
          replace: true,
          state: {
            code: err.response.status,
            message: err.response.data.message,
            from: '/article'
          }
        })
      );
  };
}

Sections.propTypes = {
  handleSubmit: PropTypes.func
};

export default Sections;
