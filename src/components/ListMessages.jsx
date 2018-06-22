import React from 'react';
import ListItem from './ListItem.jsx';
import '../App.css';

class ListMessages extends React.Component {

    render() {
      return (
        <React.Fragment>
          <div id="posts">
            {this.props.messages.map((message, i) => <ListItem key={i} date={message.createdAt} text={message.text} />)}
          </div>
        </React.Fragment>
      );
    };
  };

  export default ListMessages;