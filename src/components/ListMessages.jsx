import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import '../App.css';

class ListMessages extends React.Component {

    render() {
      return (
        <React.Fragment>
          <ul>
            {this.props.messages.map((message, i) => <ListItem key={i} value={message.text} />)}
          </ul>
        </React.Fragment>
      );
    };
  };

  export default ListMessages;