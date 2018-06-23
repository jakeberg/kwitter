import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../App.css';
import Main from './Main';
import Auth from './Auth';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <React.Fragment>

        <div className="ui container">

          <div className="App-header">
            <div className="App-title">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> Kwitter </h1></Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={props => <Auth />} />
            <Route path="/main" component={props => <Main />} />
          </Switch>
          
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;