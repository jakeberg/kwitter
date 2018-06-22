import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import ListMessages from './ListMessages';
import Auth from './Auth';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

class App extends Component {

  state = {
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
        this.setState({
          messages: response.messages,
        });
      }
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
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> Kwitter </h1></Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={props => <Auth />} />
          </Switch>
          <Switch>
            <Route exact path="/messages" component={props => <ListMessages messages={this.state.messages} />} />
          </Switch>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;