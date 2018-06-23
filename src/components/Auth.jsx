import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Header, Image, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { login } from '../actions';
import LoggedInModal from './LoggedInModal';

class Auth extends React.Component {
  state = {
    username: '',
    password: '',
    usernameRegistration: '',
    passwordRegistration: '',
    loggedIn: false,
  };

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value
    });
  }


  //this will need redux update 
  handleRegistration = () => {
    fetch("https://kwitter-api.herokuapp.com/auth/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors",
      body: JSON.stringify({
        username: this.state.usernameRegistration,
        password: this.state.passwordRegistration,
        displayName: this.state.usernameRegistration
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("You've been registered!")
      })
  }

  handleLogin = () => {
    fetch("https://kwitter-api.herokuapp.com/auth/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          this.props.dispatch(login(data.token));
          this.setState({ loggedIn: true });
        } else {
          alert("Please register first.");
        }
      })
  }

  render() {
    return (
      <React.Fragment>
        <LoggedInModal loggedIn={this.state.loggedIn} />
        <br />
        <div className="ui segment">
          <div className="ui active "></div>
          <Form onSubmit={this.handleRegistration}>
            <Form.Field>
              <h1>Register:</h1>
              <label>Username:</label>
              <input type="text" onChange={this.handleChange("usernameRegistration")} />
            </Form.Field>

            <Form.Field>
              <label>Password:</label>
              <input type="password" onChange={this.handleChange("passwordRegistration")} />
              <br />
              <br />
              <Button type="submit" className="ui primary basic button">Register</Button>
            </Form.Field>
          </Form>
        </div>

        <h3>or if you are returning...</h3>

        <div className="ui segment">
          <div className="ui active "></div>{/* loader huge */}
          <Form onSubmit={this.handleLogin}>
            <Form.Field>
              <h1>Login:</h1>
              <label>Username:</label>
              <input type="text" onChange={this.handleChange("username")} />
            </Form.Field>

            <Form.Field>
              <label>Password:</label>
              <input type="password" onChange={this.handleChange("password")} />
              <br />
              <br />
              <Button type='submit' className="ui primary basic button">Login</Button>
            </Form.Field>
          </Form>
        </div>

      </React.Fragment>
    );
  }
}

export default connect()(Auth);
