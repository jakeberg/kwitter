import React from 'react';
import ListItem from './ListItem.jsx';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const PHOTO_LIST_URL = "https://picsum.photos/list";

class ListMessages extends React.Component {

  state = { messages: [], photos: [] }

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

    fetch(PHOTO_LIST_URL)
      .then(response => response.json())
      .then(photos => {
        this.setState({ photos })
      });

  }

  messagesSortedByDate = (messages) => {
    return messages.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  }

  render() {
    const { photos = [] } = this.state;
    console.log(this.state.photos)
    return (
      <React.Fragment>
        <div className="ui segment">
          <h3>All Messages</h3>
          {this.messagesSortedByDate(this.state.messages)
            .map((message, i) =>
              <ListItem
                key={i}
                userId={message.userId}
                date={message.createdAt}
                text={message.text}
                likes={message.likes}
                photo={photos}
              />)}
        </div>
      </React.Fragment>
    );
  };
};

export default ListMessages;
