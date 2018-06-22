import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Auth extends React.Component {
  render() {
    return (
      <React.Fragment>

        <button onClick={this.handleRegistration}>Click for Registration</button>
        <button onClick={this.handleLogin}>Click for Login</button>

        <form>
          <h1>Register:</h1>
          <label> 
            Username:
                <input type="text" />
          </label>
          <label>
            Password:
                <input type="password" />
          </label>
          <button>Register (doesn't work yet)</button>
        </form>

        <form>
          <h1>Login:</h1>
          <label>
            Username:
                <input type="text" />
          </label>
          <label>
            Password:
                <input type="password" />
          </label>
          <button><Link to="/messages">Login (doesn't work yet) </Link></button>
        </form>


      </React.Fragment>
    );
  }
}

export default Auth;
