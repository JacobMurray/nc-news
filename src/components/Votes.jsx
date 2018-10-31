import React, { Component } from 'react';
import * as api from '../api';

class Votes extends Component {
    state = {
        votes : this.props.votes
    }
    render() {
        return (
            <div>
                <h4>votes: {this.state.votes}</h4>
                <button onClick={() =>this.handleClick('up', 1)}><i className="fa fa-arrow-up"></i></button>
                <button onClick={() =>this.handleClick('down', -1)}><i className="fa fa-arrow-down"></i></button>
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
    handleClick = (direction, value) => {
        api.patchVote(direction, this.props.article_id ,this.props.comment)
        .then(this.setState(prevState => {
          return { votes : prevState.votes + value }
        }))
      }
}

export default Votes;