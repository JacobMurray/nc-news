import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {handleVoteMod} from '../utils.js'
import './css/vote.css'

class Votes extends Component {
    state = {
        voteMod: 0
    }
    render() {
        return (
            <div>
                <h4>votes: {this.props.votes + this.state.voteMod}</h4>
                <button  className={this.state.voteMod === 1 ? 'voteUp' : 'NotClicked'} id='upVote' onClick={() =>this.handleClick('up')}><i className="fa fa-arrow-up"></i></button>
                <button  className={this.state.voteMod === -1 ? 'voteDown' : 'NotClicked'} id='downVote' onClick={() =>this.handleClick('down')}><i className="fa fa-arrow-down"></i></button>
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
    handleClick = (direction) => {
        
        const voteMod = handleVoteMod(this.state.voteMod, direction, this.props.id , this.props.type);
        this.setState({
            voteMod
        })
      }

}

Votes.propTypes = {
    votes: PropTypes.number,
    article_id: PropTypes.string
}
export default Votes;