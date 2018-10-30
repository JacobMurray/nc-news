import React, { Component } from 'react';

class CommentAdder extends Component {
    state = {
        comment : {}
    }
    render() {
        return (
            <form>
                <label>Comment:</label>
                <textarea name="comment" id="" cols="30" rows="10"></textarea>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default CommentAdder;