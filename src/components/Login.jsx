import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: ''
    }
    render() {
        return (
            <form>
                <label>username</label>
                <input onChange={this.handleOnChange} type="text" name="username" id=""/>
            </form>
        );
    }

    handleOnChange = () => {
        
    }
}

export default Login;