import React from 'react';
import ListMessages from './ListMessages';
import Profile from './Profile.jsx';
import Post from './Post.jsx';
import '../App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class Main extends React.Component {

    handleLogout = () => {
        fetch("https://kwitter-api.herokuapp.com/auth/logout",
            {
                method: 'GET',
                mode: "cors",
            })
            .then(response => response.json())
            .then(data => {
                console.log("Logged out:", data);
                alert("You've been sucessfully logged out!")
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui secondary pointing menu">
                    <Link className="item" to="/main/profile">Profile</Link>
                    <Link className="item" to="/main/messages">Messages</Link>
                    <Link className="item" to="/main/post">Post</Link>
                    <div className="right menu">
                        <a className="ui item" onClick={this.handleLogout}><Link to="/main">Logout</Link></a>
                    </div>
                </div>

                <Switch>
                    <Route path="/main/profile" render={props => <Profile />} />
                    <Route path="/main/messages" render={props => <ListMessages messages={this.props.messages} />} />
                    <Route path="/main/post" render={props => <Post />} />
                </Switch>
            </React.Fragment>
        );
    };
};

export default Main;