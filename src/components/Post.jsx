import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Form, TextArea, Button } from 'semantic-ui-react';
import { addMessage } from '../actions';
import { connect } from 'react-redux';


class Post extends React.Component {
  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.dispatch(addMessage(this.state.text));
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          
          <h3>Post</h3>

          <Form >
            <TextArea onChange={this.handleOnChange} placeholder="Make a post" value={this.state.text} autoFocus rows="4" cols="50" />
            <Button onClick={this.handleSubmit} type='submit' >Submit</Button>
          </Form>

        </div>
      </React.Fragment>
    );
  };
};

export default withRouter(connect()(Post));
