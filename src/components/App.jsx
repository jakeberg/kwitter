import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import ListMessages from './ListMessages';
import Auth from './Auth';
import Footer from "./Footer";

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
    fetch("https://kwitter-api.herokuapp.com/auth/register", )
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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico" />
        </head>

        <div className="ui container">
          <div className="App-header">
            <div className="App-title">
              <h1> Kwitter </h1>
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
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;