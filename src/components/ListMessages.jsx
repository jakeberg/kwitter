import React from 'react';
import ListItem from './ListItem.jsx';
import '../App.css';

class ListMessages extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="ui secondary pointing menu">
          <a className="item">Profile</a>
          <a className="item active">Messages</a>
          <div className="right menu">
            <a className="ui item">Logout</a>
          </div>
        </div>

        <div className="ui segment">
          {this.props.messages.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)).map((message, i) => <ListItem key={i} date={message.createdAt} text={message.text} />)}
        </div>
      </React.Fragment>
    );
  };
};

export default ListMessages;
