import React from 'react';
import ListItem from './ListItem.jsx';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class ListMessages extends React.Component {

  messagesSortedByDate = (messages) => {
    return messages.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>All Messages</h3>
          {this.messagesSortedByDate(this.props.messages).map((message, i) => <ListItem key={i} date={message.createdAt} text={message.text} />)}
        </div>
      </React.Fragment>
    );
  };
};

export default ListMessages;
