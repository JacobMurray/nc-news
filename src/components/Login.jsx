import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: ''
    }
    render() {
        return (
            <form onSubmit={(event) => this.props.handleSubmit(event, this.state.username)}>
                <label>username</label>
                <input onChange={this.handleOnChange} type="text" name="username" id=""/>
                <button>Submit</button>
            </form>
        );
    }

    handleOnChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

}

export default Login;