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
    //Take the value of the input and make it the title
    //Then I need to take the new todo object and push it into the todos list
    // e.preventDefault();
    this.props.dispatch(addMessage(this.state.text));
     
      this.setState({
        text: ''
      })
    
    
    //need to add newToDo to the todos list, by using spread operator and setState
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>Post</h3>
          <Form >
            <TextArea onChange={this.handleOnChange} placeholder="What needs to be done?" value={this.state.text} autoFocus rows="4" cols="50"/>
            <Button onClick={this.handleSubmit} type='submit' >Submit</Button>
          </Form>
        </div>
      </React.Fragment>
    );
  };
};



export default withRouter(connect()(Post));
