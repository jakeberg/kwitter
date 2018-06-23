import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Post extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>Post</h3>
          <textarea  rows="4" cols="50"/>
        </div>
      </React.Fragment>
    );
  };
};

export default Post;
