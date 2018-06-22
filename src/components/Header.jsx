import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="App-header">
                <button class="ui inverted button button logoutBtnPosition">Logout</button>
                <div className="App-title">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> Kwitter </h1></Link>
                </div>
            </div>
        );
    };
};