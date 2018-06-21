import React, { Component } from 'react';
import '../App.css';

class ListItem extends React.Component {
    render() {
      return (
        <React.Fragment>
          <li className="ListItem">
            {this.props.value}
          </li>
        </React.Fragment>
      );
    }
  }

  export default ListItem;
  