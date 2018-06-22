import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Auth extends React.Component {
  render() {
    return (
      <React.Fragment>

        {/* <Button onClick={this.handleRegistration}>Click for Registration</Button >
        <Button onClick={this.handleLogin}>Click for Login</Button > */}
        <br />
        <div class="ui segment">
          <div class="ui active "></div>
          <Form onSubmit={this}>
            <Form.Field>
              <h1>Register:</h1>
              <label>Username:</label>
              <input type="text" />
            </Form.Field>

            <Form.Field>
              <label>Password:</label>
              <input type="text" />
              <br />
              <br />
              <Button type="submit" className="ui primary basic button">Register (doesn't work yet)</Button>
            </Form.Field>
          </Form>
        </div>
        <h3>or if you are returning...</h3>
        {/* loader huge */}
        <div class="ui segment">
          <div class="ui active "></div>
          <Form onSubmit={this}>
            <Form.Field>
              <h1>Login:</h1>
              <label>Username:</label>
              <input type="text" />
            </Form.Field>

            <Form.Field>
              <label>Password:</label>
              <input type="password" />
              <br />
              <br />
              <Button type='submit' className="ui primary basic button"><Link to="/messages">Login (doesn't work yet) </Link></Button>
            </Form.Field>
          </Form>
        </div>

      </React.Fragment>
    );
  }
}

export default Auth;
