import React, { Component } from 'react';
import '../App.css';

class ListItem extends React.Component {

  formatDate = (date) => {
    var monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = date.substring(8, 10);
    var monthIndex = parseInt(date.substring(5, 7));
    var year = date.substring(0, 4);
    if (date.substring(11, 13) > 12) {
      var time = (date.substring(11, 13) - 12) + date.substring(13, 16) + " PM";
    } else {
      var time = date.substring(11, 16) + " AM";
    }

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + time;
  }

  render() {
    return (
      <React.Fragment>
        <div className="postItem">
          <div className="postText">
            {this.props.text}
          </div>
          <div className="postDate">
            {this.formatDate(this.props.date)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListItem;
