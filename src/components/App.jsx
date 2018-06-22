import React, { Component } from 'react';
import '../App.css';
import ListMessages from './ListMessages';
import Auth from './Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.2/semantic.min.css" />
        </head>

        <div className="ui container App ">
          <div className="App-header">
            <div className="App-title">
              <h1 className="ui header"> Kwitter </h1>
            </div>
          </div>
          <section>
            <Switch>
              <Route exact path="/" component={props => <Auth />} />
            </Switch>
            <Switch>
              <Route exact path="/messages" component={props => <ListMessages messages={this.state.messages} />} />
            </Switch>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;