import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div className="App-header">
                <div className="App-title">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <h1> Kwitter </h1></Link>
                </div>
            </div>
        )
    }
}

export default Navbar;