import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';

class Votes extends Component {
    state = {
        votes : this.props.votes,
        upVote : false,
        downVote : false
    }
    render() {
        return (
            <div>
                <h4>votes: {this.state.votes}</h4>
                <button disabled={this.state.upVote} id='upVote' onClick={(event) =>this.handleClick(event,'up', 1)}><i className="fa fa-arrow-up"></i></button>
                <button disabled={this.state.downVote} id='downVote' onClick={(event) =>this.handleClick(event, 'down', -1)}><i className="fa fa-arrow-down"></i></button>
            </div>
        );
    }

    componentDidUpdate (prevProp) {
        if(prevProp.votes !== this.props.votes){
            this.setState({
                votes : this.props.votes
            })
        }
    }
    handleClick = (event, direction, value) => {
        const vote =event.target.id
        api.patchVote(direction, this.props.article_id ,this.props.comment)
        .then(this.setState(prevState => {
          return { votes : prevState.votes + value,
                    [vote] : !prevState[vote] }
        }))
      }
}

Votes.propTypes = {
    votes: PropTypes.number,
    article_id: PropTypes.string
}
export default Votes;