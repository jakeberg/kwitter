import React from 'react';
import ListItem from './ListItem.jsx';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class ListMessages extends React.Component {

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

  messagesSortedByDate = (messages) => {
    return messages.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>All Messages</h3>
          {this.messagesSortedByDate(this.state.messages).map((message, i) => <ListItem key={i} userId={message.userId} date={message.createdAt} text={message.text} />)}
        </div>
      </React.Fragment>
    );
  };
};

export default ListMessages;
