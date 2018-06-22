import React, { Component } from 'react';
import '../App.css';
import ListMessages from './ListMessages';

class App extends Component {

  state = {
    username: 'jakeberg',
    password: "123456",
    displayName: 'JakeBerg',
    messages: [],
  };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages",
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
      })
      .then(response => response.json())
      .then(response => {
        console.log(response.messages);
        this.setState({
          messages: response.messages,
        });
      }
      );
  }

  handleRegistration = () => {
    fetch("https://kwitter-api.herokuapp.com/auth/register",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          displayName: this.state.displayName,
        }),
      })
      .then(response => response.json())
      .then(myJson =>
        console.log(myJson)
      );
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
      .then(myJson =>
        console.log(myJson)
      );
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header">
            <div className="App-title">
              <h1>Twitter, but worse</h1>
              <p id="lol">Have fun i guess</p>
            </div>
          </div>
          <div id="buttons">
            <button onClick={this.handleRegistration}>Click for Registration</button>
            <button onClick={this.handleLogin}>Click for Login</button>
          </div>
          <ListMessages messages={this.state.messages} />
          <img src="https://i.redditmedia.com/27bQCeT9rh-cVK0R3ZEig-V8ufwS04H50K0oI_c1vzQ.jpg?w=500&s=83a7df8c84302bc75ec24c74d48c64fc" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;