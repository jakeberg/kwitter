import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Form, TextArea } from 'semantic-ui-react';


class Post extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>Post</h3>
          <Form>
            <TextArea rows="4" cols="50" />
          </Form>
        </div>
      </React.Fragment>
    );
  };
};

export default Post;
